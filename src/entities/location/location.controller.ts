import { Controller } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@ApiTags("location")
@Controller("location")
export class LocationController {

    constructor(){}
}