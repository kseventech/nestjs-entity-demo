import { ValidationPipe } from "@nestjs/common"
import { UUIDValidationPipe } from "./uuid.pipe"

export const validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
})
export const uuidValidationPipe = new UUIDValidationPipe()

