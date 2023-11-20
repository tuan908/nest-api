import {BaseEntity} from 'src/BaseEntity';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({name: 'master_data'})
export class MasterDatum extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text',
    name: 'type',
  })
  type: string;

  @Column({
    type: 'text',
    name: 'name',
  })
  name: string;

  @Column({
    type: 'text',
    name: 'value',
  })
  value: string;

  @Column({
    type: 'int',
    name: 'order',
  })
  order: number;

  @Column({
    type: 'timestamp',
    name: 'created_at',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    name: 'updated_at',
  })
  updatedAt: Date;
}
