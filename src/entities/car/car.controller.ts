import { Body, Controller, Delete, Get, Param, Patch } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CarService } from "./car.service";
import { CarDto } from "./dto/car.dto";

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

    @ApiParam({ name : "id", type: "string" })
    @Get("/:id")
    async getOneCar(@Param() id : string) {
        return await this.carService.getOneCar(id)
    }

    @ApiParam({name: "id" , type: "string"})
    @Patch("/:id")
    async updateCarById(@Param() id: string, @Body() carDto: CarDto) {
        return await this.carService.updateCarById(id, carDto)
    }

    @ApiParam({name: "id" , type: "string"})
    @Delete("/:id")
    async deleteCarById(@Param() id: string) {
        return await this.carService.deleteCarById(id)
    }

}