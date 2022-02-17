import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
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

    @ApiProperty({ type: 'string', required: false })
    @IsOptional()
    location_id: string
}