import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ColorDto {
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    id: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    name: string
    
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    shade: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    brightness: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    created_at: string

    @ApiProperty({ type: 'string', required: true })
    @IsString()
    updated_at: string
}