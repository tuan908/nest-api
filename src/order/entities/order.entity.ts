import {Employee} from 'src/employee/entities/employee.entity';
import {Guest} from 'src/guest/entities/guest.entity';
import {MasterDatum} from 'src/master-data/entities/master-data.entity';
import {MenuChoices} from 'src/menu-choices/entities/menu-choices.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'note_for_employee', type: 'text'})
  noteForEmployee: string;

  @OneToOne(() => Employee)
  @JoinColumn({
    name: 'employee_id',
    referencedColumnName: 'id',
  })
  employee: Employee;

  @OneToOne(() => Guest)
  @JoinColumn({
    name: 'guest_id',
    referencedColumnName: 'id',
  })
  guest: Guest;

  @OneToOne(() => MasterDatum)
  @JoinColumn({
    name: 'menu_choices_id',
    referencedColumnName: 'id',
  })
  menuChoices: MenuChoices;
}
