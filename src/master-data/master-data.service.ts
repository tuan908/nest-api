import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseDto } from 'src/BaseDto';
import { DataSource, Repository } from 'typeorm';
import { CreateMasterDatumDto } from './dto/create-master-datum.dto';
import { UpdateMasterDatumDto } from './dto/update-master-datum.dto';
import { MasterDatum } from './entities/master-data.entity';

@Injectable()
export class MasterDataService {
  constructor(
    @InjectRepository(MasterDatum)
    private readonly masterDatumRepository: Repository<MasterDatum>,
    private readonly dataSource: DataSource,
  ) {}

  create(createMasterDatumDto: CreateMasterDatumDto) {
    return 'This action adds a new masterDatum';
  }

  async findAllMenuCategory(): Promise<BaseDto<MasterDatum>> {
    try {
      const data = await this.masterDatumRepository.find({
        where: [{ type: 'menu_category' }],
        order: {
            order: 'ASC'
        }
      });
      return { data, message: 'Successful', status: 'OK', success: true };
    } catch (error) {
      return {
        data: [],
        message: 'Failed to retrieve data',
        status: 'NG',
        success: false,
      };
    }
  }

  async findOne(id: string): Promise<BaseDto<MasterDatum>> {
    try {
      const data = await this.masterDatumRepository.findOneBy({ id });
      return {
        data,
        message: 'Successful',
        status: 'OK',
        success: true,
      };
    } catch (error) {
      return {
        data: [],
        message: 'Failed to retrieve data',
        status: 'NG',
        success: false,
      };
    }
  }

  update(id: number, updateMasterDatumDto: UpdateMasterDatumDto) {
    return `This action updates a #${id} masterDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterDatum`;
  }
}
