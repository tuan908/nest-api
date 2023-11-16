import { Column, Entity } from 'typeorm';

@Entity()
export class BaseEntity {
  @Column({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  createdAt: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  updatedAt: Date;
}
