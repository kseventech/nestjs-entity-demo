import { Timestamps } from "src/common/entity-timestamps/timestamp";
import { Car } from "src/entities/car/entity/car.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Location extends Timestamps{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({nullable: false})
    street: string

    @Column({nullable: false})
    city: string

    @OneToMany(() => Car, (car) => car.location, { onDelete: 'CASCADE' })
    cars: Car[]

}