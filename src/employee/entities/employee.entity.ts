import { BaseEntity } from 'src/BaseEntity';
import { Order } from 'src/order/entities/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({
    name: 'start_working_at',
    type: 'timestamp without time zone',
    default: new Date(),
  })
  startWorkingFrom: Date;

  @OneToMany(() => Order, (order) => order.employee)
  orders: Order[];
}
