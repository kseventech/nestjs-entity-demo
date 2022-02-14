import { Module } from "@nestjs/common";
import { CarService } from "./car.service";

@Module({
    providers: [CarService],
    exports:[],
    imports:[],
})
export class CarModule {}