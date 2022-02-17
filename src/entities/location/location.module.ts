import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Location } from "./entity/location.entity";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";

@Module({
    controllers: [LocationController],
    providers: [LocationService],
    exports:[LocationService],
    imports:[TypeOrmModule.forFeature([Location])],
})
export class LocationModule {}