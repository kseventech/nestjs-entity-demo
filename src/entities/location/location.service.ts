import { Injectable } from "@nestjs/common";
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
        return await this.locationRepo.findOne({where: {id: id}})
    }

    async updateLocationById(id: string, updateLocationDto: UpdateLocationDto) {
        return await this.locationRepo.update(id, updateLocationDto)
    }

    async deleteLocationById(id: string) {
        return await this.locationRepo.delete(id)
    }
}