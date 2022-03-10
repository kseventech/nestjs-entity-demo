import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { ColorService } from "./color.service";
import { CreateColorDto } from "./dto/create.color.dto";
import { UpdateColorDto } from "./dto/update.color.dto";

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
        throw new NotFoundException("Notfound")
        // return await this.colorService.createColor(createColorDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Get("/:id")
    async getColorById(@Param("id") id: string) {
        return await this.colorService.getColorById(id)
    }

    @ApiParam({name: "id", type:"string"})
    @Patch("/:id")
    async updateColorById(@Param("id") id: string, @Body() updateColorDto: UpdateColorDto) {
        return await this.colorService.updatecolorById(id, updateColorDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Delete("/:id")
    async deleteColorById(@Param("id") id: string) {
        return await this.colorService.deleteColorById(id)
    }
}