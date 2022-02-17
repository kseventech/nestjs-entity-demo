import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateLocationDto {
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    street: string
    
    @ApiProperty({ type: 'string', required: true })
    @IsString()
    city: string
}