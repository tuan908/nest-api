import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestModule } from 'src/guest/guest.module';
import { Rating } from './entities/rating.entity';
import { RatingController } from './rating.controller';
import { RatingService } from './rating.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rating]), forwardRef(() => GuestModule)],
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}
