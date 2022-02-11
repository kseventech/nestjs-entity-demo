import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Car } from './entities/car/entity/car.entity';
import { Color } from './entities/color/entity/color.entity';
import { Location } from './entities/location/entity/location.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    TypeOrmModule.forFeature([Car,Location,Color])
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
