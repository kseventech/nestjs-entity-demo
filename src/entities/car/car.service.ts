import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateCarDto } from "./dto/create.car.dto";
import { UpdateCarDto } from "./dto/update.car.dto";
import { Car } from "./entity/car.entity";

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private carRepo: Repository<Car>
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
}