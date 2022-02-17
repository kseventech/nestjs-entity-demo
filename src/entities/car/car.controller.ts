import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiBody, ApiParam, ApiTags } from "@nestjs/swagger";
import { CarService } from "./car.service";
import { CreateCarDto } from "./dto/create.car.dto";
import { UpdateCarDto } from "./dto/update.car.dto";

@ApiTags("car")
@Controller("car")
export class CarController {
    constructor(
        private carService: CarService
    ) {}
    
    @Get("/")
    async getCar() {
        return await this.carService.getCar()
    }

    @Post("/")
    async createCar(@Body() createCarDto: CreateCarDto) {
        return await this.carService.createCar(createCarDto)
    }

    @ApiParam({ name : "id", type: "string" })
    @Get("/:id")
    async getOneCar(@Param("id") id : string) {
        return await this.carService.getCarById(id)
    }

    @ApiParam({name: "id" , type: "string"})
    @Patch("/:id")
    async updateCarById(@Param("id") id: string, @Body() UpdateCarDto: UpdateCarDto) {
        return await this.carService.updateCarById(id, UpdateCarDto)
    }

    @ApiParam({name: "id" , type: "string"})
    @Delete("/:id")
    async deleteCarById(@Param("id") id: string) {
        return await this.carService.deleteCarById(id)
    }

}