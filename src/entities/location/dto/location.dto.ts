import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LocationDto {
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    id: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    street: string
    
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    city: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    created_at: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    updated_at: string
}