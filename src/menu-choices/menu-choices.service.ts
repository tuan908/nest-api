import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseDto } from 'src/BaseDto';
import { Repository } from 'typeorm';
import { CreateMenuChoicesDto } from './dto/create-menu-choices.dto';
import { UpdateMenuChoicesDto } from './dto/update-menu-choices.dto';
import { MenuChoices } from './entities/menu-choices.entity';

@Injectable()
export class MenuChoicesService {
  constructor(
    @InjectRepository(MenuChoices)
    private readonly menuChoicesRepository: Repository<MenuChoices>,
  ) {}

  create(createMenuChoicesDto: CreateMenuChoicesDto) {
    return 'This action adds a new menuChoice';
  }

  async findAll(limit?: number): Promise<BaseDto<MenuChoices>> {
    try {
      const data = await this.menuChoicesRepository.find({
        take: limit,
      });
      return {
        data: data,
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
        success: false,
      };
    }
  }

  async findOne(id: string): Promise<BaseDto<MenuChoices>> {
    try {
      return {
        data: await this.menuChoicesRepository.findOneBy({ id }),
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

  async findByCategory(
    category: string,
    limit?: number,
  ): Promise<BaseDto<MenuChoices>> {
    try {
      const data = await this.menuChoicesRepository.find({
        where: {
          masterDatum: [{ id: category }],
        },
        take: limit,
      });
      return {
        data,
        message: process.env.MSG_OK,
        status: 'OK',
        success: true,
      };
    } catch (error) {
      console.log(error);
      return {
        data: null,
        message: process.env.MSG_SERVER_ERROR,
        status: 'NG',
        success: false,
      };
    }
  }

  update(id: number, updateMenuChoiceDto: UpdateMenuChoicesDto) {
    return `This action updates a #${id} menuChoice`;
  }

  remove(id: number) {
    return `This action removes a #${id} menuChoice`;
  }
}
