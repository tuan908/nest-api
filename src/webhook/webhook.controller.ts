import {Body, Controller, Post} from '@nestjs/common';
import {WebhookService} from './webhook.service';
import {BaseDto} from 'src/BaseDto';
import {WebhookPostDto} from './dto/webhook-post.dto';

@Controller('webhook')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  async create(
    @Body() webhookPostDto: WebhookPostDto,
  ): Promise<BaseDto<boolean>> {
    try {
      return {
        data: await this.webhookService.insertWebhookEvent(webhookPostDto),
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      return {
        data: null,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
        success: false,
      };
    }
  }
}
