import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CarDto } from "./dto/car.dto";
import { Car } from "./entity/car.entity";

@Injectable()
export class CarService {
    constructor(
        @InjectRepository(Car) private carRepo: Repository<Car>
    ) {}

    async getOneCar(id: string) {
        return await this.carRepo.findOne({ where: { id: id }})
    }

    async getCar() {
        return await this.carRepo.find()
    }

    async updateCarById(id: string ,carDto: CarDto) {
        return await this.carRepo.update(id, carDto)
    }

    async deleteCarById(id: string) {
        return await this.carRepo.delete(id)
    }
}