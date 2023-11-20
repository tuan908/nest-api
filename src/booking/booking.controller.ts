import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {BaseDto} from 'src/BaseDto';
import {BookingService} from './booking.service';
import {CreateBookingDto} from './dto/create-booking.dto';
import {UpdateBookingDto} from './dto/update-booking.dto';
import {Booking} from './entities/booking.entity';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(
    @Body() createBookingDto: CreateBookingDto,
  ): Promise<BaseDto<Booking>> {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
