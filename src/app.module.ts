import {Module} from '@nestjs/common/decorators/modules';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm/dist/typeorm.module';
import Joi from 'joi';
import {BookingModule} from './booking/booking.module';
import {Booking} from './booking/entities/booking.entity';
import {Guest} from './guest/entities/guest.entity';
import {GuestModule} from './guest/guest.module';
import {MasterDatum} from './master-data/entities/master-data.entity';
import {MasterDataModule} from './master-data/master-data.module';
import {MenuChoices} from './menu-choices/entities/menu-choices.entity';
import {MenuChoicesModule} from './menu-choices/menu-choices.module';
import {Rating} from './rating/entities/rating.entity';
import {RatingModule} from './rating/rating.module';
import {NotificationModule} from './notification/notification.module';
import {OrderModule} from './order/order.module';
import {EmployeeModule} from './employee/employee.module';
import {Notification} from './notification/entities/notification.entity';
import {Order} from './order/entities/order.entity';
import {Employee} from './employee/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.production'],
      cache: true,
      expandVariables: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision', 'staging')
          .default('development'),
        PORT: Joi.number().default(8081),
      }),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.CONNECTION_STRING,
      entities: [
        Booking,
        Employee,
        Guest,
        MasterDatum,
        MenuChoices,
        Order,
        Rating,
        Notification,
      ],
      logging:
        process.env.NODE_ENV === 'development'
          ? ['query', 'info', 'error']
          : ['error'],
      logger: 'file',
    }),
    MenuChoicesModule,
    BookingModule,
    GuestModule,
    MasterDataModule,
    RatingModule,
    NotificationModule,
    OrderModule,
    EmployeeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
