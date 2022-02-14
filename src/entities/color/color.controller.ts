import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("color")
@Controller("color")
export class ColorController {
    constructor() {}
}