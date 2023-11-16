import { MasterDatum } from 'src/master-data/entities/master-data.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'menu_choices' })
export class MenuChoices {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('int4')
  price: number;

  @Column('text')
  figure: string;

  @Column('text')
  note: string;

  @Column({
    type: 'boolean',
    name: 'is_best_seller',
    default: false,
  })
  isBestSeller: boolean;

  @Column('float8')
  rating: number;

  @OneToOne(() => MasterDatum)
  @JoinColumn({ name: 'category', referencedColumnName: 'id' })
  masterDatum: MasterDatum;
}
