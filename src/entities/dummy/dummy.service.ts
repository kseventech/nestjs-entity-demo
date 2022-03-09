import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from '../car/entity/car.entity';
import { Color } from '../color/entity/color.entity';
import { Location } from '../location/entity/location.entity';

@Injectable()
export class DummyService {

  constructor(
    @InjectRepository(Car) private carRepo: Repository<Car>,
    @InjectRepository(Color) private colorRepo: Repository<Color>,
    @InjectRepository(Location) private locationRepo :Repository<Location>

  ) {}

  async findAll() {

    const locations = await this.locationRepo.save([
      {street: "Knez Mihajlova", city: "Beograd"},
      {street: "Bana Jelacica", city: "Zagreb"},
      {street: "Debar Malo", city: "Skoplje"},
      {street: "Zmaj Jovina", city: "Novi Sad"}
    ])

    const colors = await this.colorRepo.save([
      {name: "Red", brightness: "10%", shade: "1%"},
      {name: "Blue", brightness: "20%", shade: "2%"},
      {name: "Green" , brightness: "30%", shade: "3%"}
    ])

    const cars_1 = await this.carRepo.save([
      {manufacturer: "BMW",model: "Serie 1", engine: "petrol", location: locations[0],colors: [colors[0], colors[1]]},
      {manufacturer: "BMW",model: "Serie 2", engine: "petrol", location: locations[0],colors: [colors[1], colors[2]]},
      {manufacturer: "Opel",model: "Astra", engine: "diesel", location: locations[0],colors: [colors[1], colors[2]]},
      {manufacturer: "Audi",model: "A3", engine: "petrol", location: locations[2],colors: [colors[0]]},
      {manufacturer: "Volvo",model: "cx60", engine: "diesel", location: locations[3],colors: [colors[0], colors[2]]},
      {manufacturer: "Mazda",model: "3", engine: "petrol", location: locations[1],colors: [colors[1], colors[2]]},
    ]) 
    return "dummy data created" 
  }
}
