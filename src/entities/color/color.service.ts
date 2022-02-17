import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateColorDto } from "./dto/create.color.dto";
import { UpdateColorDto } from "./dto/update.color.dto";
import { Color } from "./entity/color.entity";

@Injectable()
export class ColorService {
    constructor(
        @InjectRepository(Color) private colorRepo: Repository<Color>
    ) {}

    async getColor() {
        return await this.colorRepo.find()
    }

    async createColor(createColorDto: CreateColorDto) {
        return await this.colorRepo.save(createColorDto)
    }

    async getColorById(id: string) {
        const found =  await this.colorRepo.findOne({where: {id}})
        if(!found) throw new NotFoundException()
        return found
    }

    async updatecolorById(id: string, updateColorDto: UpdateColorDto) {
        await this.getColorById(id)
        return await this.colorRepo.update(id, updateColorDto)
    }

    async deleteColorById(id: string) {
        await this.getColorById(id)
        return await this.colorRepo.delete(id)
    }
}