import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ColorService } from "./color.service";
import { CreateColorDto } from "./dto/create.color.dto";
import { updateColorDto } from "./dto/update.color.dto";

@ApiTags("color")
@Controller("color")
export class ColorController {
    constructor(
        private colorService: ColorService
    ) {}

    @Get("/")
    async getColor() {
        return await this.colorService.getColor()
    }

    @Post("/")
    async createColor(@Body() createColorDto: CreateColorDto) {
        return await this.colorService.createColor(createColorDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Get("/:id")
    async getColorById(@Param() id: string) {
        return await this.colorService.getColorById(id)
    }

    @ApiParam({name: "id", type:"string"})
    @Patch("/:id")
    async updateColorById(@Param() id: string, @Body() updateColorDto: updateColorDto) {
        return await this.colorService.updatecolorById(id, updateColorDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Delete("/:id")
    async deleteColorById(@Param() id: string) {
        return await this.colorService.deleteColorById(id)
    }
}