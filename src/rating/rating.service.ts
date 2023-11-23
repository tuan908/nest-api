import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {randomUUID} from 'crypto';
import {BaseDto} from 'src/BaseDto';
import {Guest} from 'src/guest/entities/guest.entity';
import {GuestService} from 'src/guest/guest.service';
import {DataSource, Repository} from 'typeorm';
import {CreateRatingDto} from './dto/create-rating.dto';
import {UpdateRatingDto} from './dto/update-rating.dto';
import {Rating} from './entities/rating.entity';

@Injectable()
export class RatingService {
  constructor(
    @InjectRepository(Rating)
    private readonly ratingRepository: Repository<Rating>,
    private readonly dataSource: DataSource,
    private readonly guestService: GuestService,
  ) {}

  async findAllByGuestId(guestId: string): Promise<BaseDto<Rating>> {
    try {
      const data = await this.ratingRepository.find({
        where: {guest: [{id: guestId}]},
      });

      return {
        data,
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      return {
        data: null,
        success: false,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
      };
    }
  }
  async create(createRatingDto: CreateRatingDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      let guest = await queryRunner.manager.findOneBy(Guest, {
        zaloId: createRatingDto.zaloId,
      });

      if (guest === null) {
        const guestServiceResponse = await this.guestService.create({
          name: createRatingDto.name,
          phone: '',
          zaloId: createRatingDto.zaloId,
        });
        if (guestServiceResponse.data !== null) {
          guest = guestServiceResponse.data as Guest;
        }
      }

      const newRating = new Rating();

      newRating.id = randomUUID();
      newRating.commenterName = createRatingDto.commenterName
        ? createRatingDto.commenterName
        : null;
      newRating.commenterPhone = createRatingDto.commenterPhone
        ? createRatingDto.commenterPhone
        : null;
      newRating.starNumber = createRatingDto.starNumber;
      newRating.content = createRatingDto.content;
      newRating.guest = guest;

      await queryRunner.manager.save(newRating);

      await queryRunner.commitTransaction();
    } catch (error) {
      console.error(error);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      return false;
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }

    return true;
  }

  findAll() {
    return `This action returns all rating`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`;
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`;
  }

  remove(id: number) {
    return `This action removes a #${id} rating`;
  }
}
