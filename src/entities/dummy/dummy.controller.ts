import { Controller, Get } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("dummy")
@Controller('dummy')
export class DummyController {
  constructor(private readonly dummyService: DummyService) {}

  @Get()
  findAll() {
    return this.dummyService.findAll();
  }

}
