import {Module, forwardRef} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MasterDatum} from './entities/master-data.entity';
import {MasterDataController} from './master-data.controller';
import {MasterDataService} from './master-data.service';
import {GuestModule} from 'src/guest/guest.module';
import {MenuChoicesModule} from 'src/menu-choices/menu-choices.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MasterDatum]),
    forwardRef(() => GuestModule),
    forwardRef(() => MenuChoicesModule),
  ],
  controllers: [MasterDataController],
  providers: [MasterDataService],
  exports: [MasterDataService],
})
export class MasterDataModule {}
