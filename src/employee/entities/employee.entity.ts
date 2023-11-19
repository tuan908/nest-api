import { BaseEntity } from 'src/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({
    name: 'start_working_date',
    type: 'timestamp without time zone',
    default: new Date(),
  })
  startWorkingDate: Date;
}
