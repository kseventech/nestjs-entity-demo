import { Car } from "src/entities/car/entity/car.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Color extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column({nullable: false})
    name: string

    @Column({nullable: false})
    share: string

    @Column({nullable: false})
    brightness: string

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToMany(() => Car, (car) => car.id, { onDelete: 'CASCADE' })
    cars: Car[]
}