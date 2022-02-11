import { BaseEntity, CreateDateColumn, UpdateDateColumn } from "typeorm";

export class Timestamps extends BaseEntity {
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
}