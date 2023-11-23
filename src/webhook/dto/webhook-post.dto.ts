import {PartialType} from '@nestjs/mapped-types';
import {WebhookBaseDto} from './webhook-base.dto';
import {WebhookEntity} from '../entity/webhook.entity';

export class WebhookPostDto extends PartialType(WebhookBaseDto) {}
