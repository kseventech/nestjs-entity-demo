import { BadRequestException, ValidationError, ValidationPipe } from "@nestjs/common"
import { UUIDValidationPipe } from "./uuid.pipe"

export const validationPipe = new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors: ValidationError[]) => {
        let message = ""
        errors.forEach((e,i) => {
            const key = String(Object.keys(e.constraints))
            message += errors.length === i + 1 ? `${e.constraints[key]}` : `${e.constraints[key]}, `;
        })
        return new BadRequestException(message)
    }
})
export const uuidValidationPipe = new UUIDValidationPipe()

