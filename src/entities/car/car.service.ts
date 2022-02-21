import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, In, Repository } from "typeorm";
import { Color } from "../color/entity/color.entity";
import { Location } from "../location/entity/location.entity";
import { CreateCarDto } from "./dto/create.car.dto";
import { UpdateCarDto } from "./dto/update.car.dto";
import { Car } from "./entity/car.entity";

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private carRepo: Repository<Car>,
        @InjectRepository(Location) private locationRepo: Repository<Location>,
        @InjectRepository(Color) private colorRepo: Repository<Color>,
        private connection: Connection,

    ) {}

    async getCarById(id: string) {
        const found = await this.carRepo.findOne({ where: { id }, relations: ["location", "colors"]})
        if(!found) throw new NotFoundException()
        return found
    }

    async createCar(createCarDto: CreateCarDto) {
        const location = await this.locationRepo.findOne({where: {id: createCarDto.location}})
        if(!location) throw new NotFoundException("Location with given id not found")
        const colors = await this.colorRepo.find({where: {id: In(createCarDto.colors)}})
        if(!colors.length) throw new NotFoundException("Colors with given id not found")
        const car = this.carRepo.create({
            model: createCarDto.model,
            manufacturer: createCarDto.manufacturer,
            engine: createCarDto.engine
        })
        car.location = location
        car.colors = colors
        return await this.carRepo.save(car)
    }

    async getCar() {
        return await this.carRepo.find({relations: ["location", "colors"]})
    }

    async updateCarById(id: string ,UpdateCarDto: UpdateCarDto) {
        await this.getCarById(id)
        // return await this.carRepo.update(id, UpdateCarDto)
    }

    async deleteCarById(id: string) {
        await this.getCarById(id)
        return await this.carRepo.delete(id)
    }
    
    async carPurchase() {
        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.connect();
        await queryRunner.startTransaction();

        const car1 = queryRunner.manager.create(Car,{
            engine: "petrol",
            manufacturer: "bmw",
            model: "t1"
        })
        const car2 = queryRunner.manager.create(Car,{
            engine: "petrol",
            manufacturer: "bmw",
            model: "t2"
        })
        try {

            // execute some operations on this transaction:
            await queryRunner.manager.save(car1);
            await queryRunner.manager.save(car2);
        
            // commit transaction now:
            await queryRunner.commitTransaction();
        
        } catch (err) {
            console.log("error")
            console.log(err.message)
        
            // since we have errors let's rollback changes we made
            await queryRunner.rollbackTransaction();
        
        } finally {
        
            // you need to release query runner which is manually created:
            await queryRunner.release();
        }
        return "transaction has finished"
    }
}