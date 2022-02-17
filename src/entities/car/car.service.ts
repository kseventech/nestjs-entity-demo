import { Injectable } from "@nestjs/common";
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

    async getOneCar(id: string) {
        return await this.carRepo.findOne({ where: { id: id }})
    }

    async createCar(createCarDto: CreateCarDto) {

    }

    async getCar() {
        return await this.carRepo.find()
    }

    async updateCarById(id: string ,UpdateCarDto: UpdateCarDto) {
        return await this.carRepo.update(id, UpdateCarDto)
    }

    async deleteCarById(id: string) {
        return await this.carRepo.delete(id)
    }
}