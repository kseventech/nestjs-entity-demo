import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("car")
@Controller("car")
export class CarController {
    constructor() {}

    @Get()
    async getCar() {

    }
}