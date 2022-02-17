import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './entities/car/car.module';
import { Car } from './entities/car/entity/car.entity';
import { ColorModule } from './entities/color/color.module';
import { Color } from './entities/color/entity/color.entity';
import { Location } from './entities/location/entity/location.entity';
import { LocationModule } from './entities/location/location.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([Car,Location,Color]),
    CarModule,
    LocationModule,
    ColorModule
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
