import { Employee } from 'src/employee/entities/employee.entity';
import { Guest } from 'src/guest/entities/guest.entity';
import { MasterDatum } from 'src/master-data/entities/master-data.entity';
import { MenuChoices } from 'src/menu-choices/entities/menu-choices.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'note_for_employee', type: 'text' })
  noteForEmployee: string;

  @Column({
    name: 'created_at',
    type: 'timestamp without time zone',
    default: new Date(),
  })
  created_at: Date;

  @ManyToOne(() => Employee, (employee) => employee.orders)
  employee: Employee;

  @ManyToOne(() => Guest, (guest) => guest.orders)
  guest: Guest;

  @OneToOne(() => MasterDatum)
  @JoinColumn({
    name: 'menu_choices_id',
    referencedColumnName: 'id',
  })
  menuChoices: MenuChoices;
}
