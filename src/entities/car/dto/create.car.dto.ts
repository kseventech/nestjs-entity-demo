import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Color } from 'src/entities/color/entity/color.entity';
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

    @ApiProperty({ type: 'object', required: false })
    @IsOptional()
    location: Location

    @ApiProperty({ type: 'object', isArray: true, required: false })
    @IsOptional()
    colors: Color[]
}