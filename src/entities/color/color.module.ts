import { Module } from "@nestjs/common";
import { ColorController } from "./color.controller";
import { ColorService } from "./color.service";

@Module({
    controllers: [ColorController],
    providers: [ColorService],
    exports:[],
    imports:[],
})
export class ColorModule {}