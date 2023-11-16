import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { type BaseDto } from 'src/BaseDto';
import { MasterDatum } from 'src/master-data/entities/master-data.entity';
import { DataSource } from 'typeorm';
import { type Repository } from 'typeorm/repository/Repository';
import { CreateGuestDto } from './dto/create-guest.dto';
import { GuestDto } from './dto/guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { Guest } from './entities/guest.entity';

@Injectable()
export class GuestService {
  constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
    private readonly dataSource: DataSource,
  ) {}

  async create(createGuestDto: CreateGuestDto): Promise<BaseDto<Guest>> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const defaultRank = await queryRunner.manager.findOneBy(MasterDatum, {
      type: 'guest_rank',
      name: 'silver',
    });

    const newGuest = new Guest();

    newGuest.id = randomUUID();
    newGuest.name = createGuestDto.name;
    newGuest.phone = createGuestDto.phone;
    newGuest.masterDatum.value = defaultRank.value;
    newGuest.zaloId = createGuestDto.zaloId;
    try {
      await queryRunner.manager.save(Guest, newGuest);

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
      data: newGuest,
      message: process.env.MSG_OK,
      status: 'OK',
      success: true,
    };
  }

  async findAll(): Promise<BaseDto<GuestDto>> {
    try {
      const entities = await this.guestRepository.find();

      return {
        data: entities.map(
          (entity) =>
            new GuestDto(
              entity.id,
              entity.phone,
              entity.name,
              entity.masterDatum.value,
              entity.zaloId,
              entity.createdAt,
              entity.updatedAt,
            ),
        ),
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

  async findByZaloId(zaloId: string): Promise<BaseDto<Guest>> {
    try {
      return {
        data: await this.guestRepository.findOne({
          where: {
            zaloId: zaloId,
          },
        }),
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        message: process.env.MSG_OK,
        status: 'NG',
        success: false,
      };
    }
  }

  findById(id: number) {
    return `This action returns a #${id} guest`;
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return `This action updates a #${id} guest`;
  }

  remove(id: number) {
    return `This action removes a #${id} guest`;
  }
}
