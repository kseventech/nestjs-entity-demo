import { Module } from '@nestjs/common';
import { DummyService } from './dummy.service';
import { DummyController } from './dummy.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Car } from '../car/entity/car.entity';
import { Color } from '../color/entity/color.entity';
import { Location } from '../location/entity/location.entity';

@Module({
  controllers: [DummyController],
  providers: [DummyService],
  imports: [TypeOrmModule.forFeature([Car, Color, Location])]
})
export class DummyModule {}
