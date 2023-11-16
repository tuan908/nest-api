import { BaseEntity } from 'src/BaseEntity';
import { MasterDatum } from 'src/master-data/entities/master-data.entity';
import { Order } from 'src/order/entities/order.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Guest extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'zalo_id', type: 'text' })
  zaloId: string;

  @Column('character')
  phone: string;

  @Column('text')
  name: string;

  @OneToOne(() => MasterDatum)
  @JoinColumn({
    name: 'rank',
    referencedColumnName: 'id',
  })
  masterDatum: MasterDatum;

  @OneToMany(() => Order, (order) => order.guest)
  orders: Order[];
}
