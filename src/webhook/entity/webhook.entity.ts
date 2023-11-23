import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity({
  name: 'webhook_events',
})
export class WebhookEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    name: 'event',
  })
  event: string;

  @Column({
    type: 'varchar',
    name: 'app_id',
  })
  appId: string;

  @Column({
    type: 'int4',
    name: 'version_id',
  })
  versionId: number;

  @Column({
    type: 'int4',
    name: 'status',
  })
  status: number;

  @Column({
    type: 'text',
    name: 'description',
  })
  description?: string;

  @Column({
    type: 'float8',
    name: 'timestamp',
  })
  timestamp?: number;
}
