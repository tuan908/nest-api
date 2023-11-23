import {PartialType} from '@nestjs/mapped-types';
import {WebhookBaseDto} from './webhook-base.dto';

export class WebhookPostDto extends PartialType(WebhookBaseDto) {}
