import { Module } from "@nestjs/common";
import { LocationService } from "./location.service";

@Module({
    providers: [LocationService],
    exports:[],
    imports:[],
})
export class LocationModule {}