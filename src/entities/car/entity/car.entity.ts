import { Color } from "src/entities/color/entity/color.entity";
import { Location } from "src/entities/location/entity/location.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Car extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({nullable: false})
    model: string;

    @Column({nullable: false})
    manufacturer: string;

    @Column({nullable: false})
    engine: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(() => Location, (location) => location.cars)
    location_id: Location
    
    @ManyToMany(() => Color, (color) => color.id , { onDelete : 'CASCADE'})
    @JoinTable()
    colors: Color[]
}