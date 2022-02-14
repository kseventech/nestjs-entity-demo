import { Module } from "@nestjs/common";
import { ColorService } from "./color.service";

@Module({
    providers: [ColorService],
    exports:[],
    imports:[],
})
export class ColorModule {}