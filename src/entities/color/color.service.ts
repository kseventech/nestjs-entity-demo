import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateColorDto } from "./dto/create.color.dto";
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
        return await this.colorRepo.findOne({where: {id: id}})
    }

    async updatecolorById(id: string, createColorDto: CreateColorDto) {
        return await this.colorRepo.update(id, createColorDto)
    }

    async deleteColorById(id: string) {
        return await this.colorRepo.delete(id)
    }
}