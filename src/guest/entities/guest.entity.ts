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

@Entity({ name: 'guest' })
export class Guest extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        name: 'zalo_id',
        type: 'text'
    })
    zaloId: string;

    @Column({
        type: 'character',
        name: 'phone'
    })
    phone: string;

    @Column({
        type: 'text',
        name: 'name'
    })
    name: string;

    @Column({
        type: 'text',
        name: 'avatar'
    })
    avatar: string;

    @OneToOne(() => MasterDatum)
    @JoinColumn({
        name: 'rank',
        referencedColumnName: 'id',
    })
    masterDatum: MasterDatum;

    @OneToMany(() => Order, (order) => order.guest)
    orders: Order[];
}
