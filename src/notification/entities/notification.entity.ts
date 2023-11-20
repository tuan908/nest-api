import {BaseEntity} from 'src/BaseEntity';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  type: string;

  @Column('text')
  content: string;
}
