import {Injectable} from '@nestjs/common';
import {randomUUID} from 'crypto';
import {BaseDto} from 'src/BaseDto';
import {Guest} from 'src/guest/entities/guest.entity';
import {DataSource} from 'typeorm';
import {CreateBookingDto} from './dto/create-booking.dto';
import {UpdateBookingDto} from './dto/update-booking.dto';
import {Booking} from './entities/booking.entity';

@Injectable()
export class BookingService {
  constructor(private readonly dataSource: DataSource) {}

  async create(createBookingDto: CreateBookingDto): Promise<BaseDto<Booking>> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const newBooking = new Booking();

    newBooking.id = randomUUID();
    newBooking.date = createBookingDto.date;
    newBooking.time = createBookingDto.time;
    newBooking.note = createBookingDto.note;
    newBooking.failedReason = '';
    newBooking.successful = true;
    newBooking.guest = await this.dataSource.manager.findOneBy(Guest, {
      zaloId: createBookingDto.zaloId,
    });
    newBooking.bookingName = createBookingDto.bookingName;
    newBooking.bookingPhone = createBookingDto.bookingPhone;
    try {
      await queryRunner.manager.save(newBooking);

      await queryRunner.commitTransaction();
    } catch (error) {
      console.error(error);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      return {
        data: null,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
        success: false,
      };
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }

    return {
      data: newBooking,
      message: process.env.MSG_OK,
      status: 'OK',
      success: true,
    };
  }

  findAll() {
    return `This action returns all booking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} booking`;
  }

  update(id: number, updateBookingDto: UpdateBookingDto) {
    return `This action updates a #${id} booking`;
  }

  remove(id: number) {
    return `This action removes a #${id} booking`;
  }
}
