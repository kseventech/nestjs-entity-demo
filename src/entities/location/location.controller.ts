import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiParam, ApiTags } from "@nestjs/swagger";
import { CreateLocationDto } from "./dto/create.location.dto";
import { UpdateLocationDto } from "./dto/update.location.dto";
import { LocationService } from "./location.service";

@ApiTags("location")
@Controller("location")
export class LocationController {

    constructor(
        private locationService: LocationService
    ) {}

    @Get()
    async getLocation() {
        return await this.locationService.getLocation()
    }

    @Post()
    async createLocation(@Body() createLocationDto: CreateLocationDto) {
        return await this.locationService.createLocation(createLocationDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Get("/:id")
    async getLocationById(@Param("id") id : string) {
        return await this.locationService.getLocationById(id)
    }

    @ApiParam({name: "id", type: "string"})
    @Patch("/:id")
    async updateLocationById(@Param("id") id: string , @Body() UpdateLocationDto: UpdateLocationDto) {
        return await this.locationService.updateLocationById(id, UpdateLocationDto)
    }

    @ApiParam({name: "id", type: "string"})
    @Delete("/:id")
    async deleteLocationById(@Param("id") id: string) {
        return await this.locationService.deleteLocationById(id)
    }
}