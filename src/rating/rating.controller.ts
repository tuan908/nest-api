import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseDto } from 'src/BaseDto';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
  constructor(private readonly ratingService: RatingService) {}

  @Post()
  async create(
    @Body() createRatingDto: CreateRatingDto,
  ): Promise<BaseDto<boolean>> {
    try {
      return {
        data: await this.ratingService.create(createRatingDto),
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
        success: false,
      };
    }
  }

  @Get()
  findAll() {
    return this.ratingService.findAll();
  }

  @Get(':guestId')
  findAllByGuestId(@Param('guestId') guestId: string) {
    return this.ratingService.findAllByGuestId(guestId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRatingDto: UpdateRatingDto) {
    return this.ratingService.update(+id, updateRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratingService.remove(+id);
  }
}
