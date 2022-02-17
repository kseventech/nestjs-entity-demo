import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateLocationDto } from "./dto/create.location.dto";
import { UpdateLocationDto } from "./dto/update.location.dto";
import { Location } from "./entity/location.entity";

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(Location) private locationRepo: Repository<Location>
    ) {}

    async getLocation() {
        return await this.locationRepo.find()
    }

    async createLocation(createLocationDto: CreateLocationDto) {
        return await this.locationRepo.save(createLocationDto)
    }

    async getLocationById(id: string) {
        const found = await this.locationRepo.findOne(id)
        if(!found) throw new NotFoundException()
        return found
    }

    async updateLocationById(id: string, updateLocationDto: UpdateLocationDto) {
        await this.getLocationById(id)
        const updated = await this.locationRepo.update(id, updateLocationDto)
        return updated
    }

    async deleteLocationById(id: string) {
        await this.getLocationById(id)
        return await this.locationRepo.delete(id)
    }
}