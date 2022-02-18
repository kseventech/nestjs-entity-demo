import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { ColorDto } from 'src/entities/color/dto/color.dto';
import { Color } from 'src/entities/color/entity/color.entity';
import { LocationDto } from 'src/entities/location/dto/location.dto';
import { Location } from 'src/entities/location/entity/location.entity';
export class CreateCarDto {

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    manufacturer: string    

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    model: string
    
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    engine: string

    @ApiProperty({ type: LocationDto, required: false })
    @IsOptional()
    location: Location

    @ApiProperty({ type: ColorDto, isArray: true, required: false })
    @IsOptional()
    colors: Color[]
}