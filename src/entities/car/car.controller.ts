import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("car")
@Controller("car")
export class CarController {
    constructor() {}

    @Get()
    async getCar() {

    }
}