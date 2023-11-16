import { BaseEntity } from 'src/BaseEntity';
import { Guest } from 'src/guest/entities/guest.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'booking' })
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'booking_name', type: 'text' })
  bookingName: string;

  @Column({ name: 'booking_phone', type: 'varchar' })
  bookingPhone: string;

  @Column({ name: 'date', type: 'date' })
  date: Date;

  @Column({ name: 'time', type: 'time' })
  time: Date;

  @Column({ name: 'note', default: '', type: 'text' })
  note?: string;

  @Column('bool')
  successful: boolean;

  @Column({ name: 'failed_reason', type: 'text' })
  failedReason: string;

  @OneToOne(() => Guest)
  @JoinColumn({
    name: 'guest_id',
    referencedColumnName: 'id',
  })
  guest: Guest;

  @Column({ name: 'guest_name', type: 'text' })
  guestName: string;
}
