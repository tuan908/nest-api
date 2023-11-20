import {BaseEntity} from 'src/BaseEntity';
import {Guest} from 'src/guest/entities/guest.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: 'star_number', type: 'int4'})
  starNumber: number;

  @Column()
  content: string;

  @OneToOne(() => Guest)
  @JoinColumn({
    name: 'guest_id',
    referencedColumnName: 'id',
  })
  guest: Guest;
}
