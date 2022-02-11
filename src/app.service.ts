import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car/entity/car.entity';
import { Color } from './entities/color/entity/color.entity';
import { Location } from './entities/location/entity/location.entity';

@Injectable()
export class AppService {
  

  constructor(
    @InjectRepository(Car) private carRepo: Repository<Car>,
    @InjectRepository(Color) private colorRepo: Repository<Color>,
    @InjectRepository(Location) private locationRepo: Repository<Location>
  ) {}
  getHello(): string {
    return 'Hello World!';
  }
}
