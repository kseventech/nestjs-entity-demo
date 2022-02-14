import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColorController } from "./color.controller";
import { ColorService } from "./color.service";
import { Color } from "./entity/color.entity";

@Module({
    controllers: [ColorController],
    providers: [ColorService],
    exports:[],
    imports:[TypeOrmModule.forFeature([Color])],
})
export class ColorModule {}