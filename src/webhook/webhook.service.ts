import {Injectable} from '@nestjs/common';
import {DataSource, Repository} from 'typeorm';
import {WebhookEntity} from './entity/webhook.entity';
import {WebhookPostDto} from './dto/webhook-post.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {randomUUID} from 'crypto';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(WebhookEntity)
    private readonly webhookRepository: Repository<WebhookEntity>,
    private readonly dataSource: DataSource,
  ) {}

  async insertWebhookEvent(dto: WebhookPostDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const entity = new WebhookEntity();
      entity.id = randomUUID();
      entity.event = dto.event;
      entity.appId = dto.appId;
      entity.versionId = dto.versionId;
      entity.status = dto.status;
      entity.timestamp = dto.timestamp;
      entity.description = dto.description;

      await queryRunner.manager.save(entity);
      await queryRunner.commitTransaction();
    } catch (error) {
      console.log(error);

      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      await queryRunner.release();
    }

    return true;
  }
}
