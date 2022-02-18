import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CarController } from "./car.controller";
import { CarService } from "./car.service";
import { Car } from "./entity/car.entity";

@Module({
    controllers: [CarController],
    providers: [CarService],
    exports:[],
    imports:[TypeOrmModule.forFeature([Car])],
})
export class CarModule {}