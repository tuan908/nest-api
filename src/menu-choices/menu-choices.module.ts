import {Module, forwardRef} from '@nestjs/common';
import {MenuChoicesService} from './menu-choices.service';
import {MenuChoicesController} from './menu-choices.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MenuChoices} from './entities/menu-choices.entity';
import {MasterDataModule} from 'src/master-data/master-data.module';
import {OrderModule} from 'src/order/order.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MenuChoices]),
    forwardRef(() => MasterDataModule),
    forwardRef(() => OrderModule),
  ],
  controllers: [MenuChoicesController],
  providers: [MenuChoicesService],
  exports: [MenuChoicesService],
})
export class MenuChoicesModule {}
