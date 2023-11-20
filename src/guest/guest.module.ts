import {Module, forwardRef} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Guest} from './entities/guest.entity';
import {GuestController} from './guest.controller';
import {GuestService} from './guest.service';
import {BookingModule} from 'src/booking/booking.module';
import {MasterDataModule} from 'src/master-data/master-data.module';
import {OrderModule} from 'src/order/order.module';
import {NotificationModule} from 'src/notification/notification.module';
import {RatingModule} from 'src/rating/rating.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Guest]),
    forwardRef(() => NotificationModule),
    forwardRef(() => RatingModule),
    forwardRef(() => BookingModule),
    forwardRef(() => MasterDataModule),
    forwardRef(() => OrderModule),
  ],
  controllers: [GuestController],
  providers: [GuestService],
  exports: [GuestService],
})
export class GuestModule {}
