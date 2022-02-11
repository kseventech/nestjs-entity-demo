import { Timestamps } from "src/common/entity-timestamps/timestamp";
import { Color } from "src/entities/color/entity/color.entity";
import { Location } from "src/entities/location/entity/location.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Car extends Timestamps {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({nullable: false})
    model: string;

    @Column({nullable: false})
    manufacturer: string;

    @Column({nullable: false})
    engine: string;

    @ManyToOne(() => Location, (location) => location.cars)
    location: Location
    
    @ManyToMany(() => Color, (color) => color.id , { onDelete : 'CASCADE'})
    @JoinTable()
    colors: Color[]
}