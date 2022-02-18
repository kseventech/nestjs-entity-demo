import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { CreateCarDto } from "./dto/create.car.dto";
import { UpdateCarDto } from "./dto/update.car.dto";
import { Car } from "./entity/car.entity";

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private carRepo: Repository<Car>,
        private connection: Connection
    ) {}

    async getCarById(id: string) {
        const found = await this.carRepo.findOne({ where: { id }, relations: ["location", "colors"]})
        if(!found) throw new NotFoundException()
        return found
    }

    async createCar(createCarDto: CreateCarDto) {
        const created = this.carRepo.create(createCarDto)
        return await this.carRepo.save(created)
    }

    async getCar() {
        return await this.carRepo.find({relations: ["location", "colors"]})
    }

    async updateCarById(id: string ,UpdateCarDto: UpdateCarDto) {
        await this.getCarById(id)
        return await this.carRepo.update(id, UpdateCarDto)
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