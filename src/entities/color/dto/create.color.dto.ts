import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString, Validate, validate } from "class-validator"

export class CreateColorDto {
    @ApiProperty({required: false})
    @IsString()
    name: string

    @ApiProperty({required: false})
    @IsString()
    shade: string

    @ApiProperty({required: false})
    @IsString()
    brightness: string

    @IsEmail()
    email: string
}