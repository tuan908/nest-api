import {Injectable} from '@nestjs/common';
import {randomUUID} from 'crypto';
import {Employee} from 'src/employee/entities/employee.entity';
import {Guest} from 'src/guest/entities/guest.entity';
import {MenuChoices} from 'src/menu-choices/entities/menu-choices.entity';
import {DataSource} from 'typeorm';
import messages from '../../messages.json';
import {CreateOrderDto} from './dto/create-order.dto';
import {UpdateOrderDto} from './dto/update-order.dto';
import {Order} from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(private readonly dataSource: DataSource) {}

  async create(createOrderDto: CreateOrderDto) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    const newOrder = new Order();

    try {
      newOrder.id = randomUUID();

      const [guest, employee, menuChoices] = await Promise.all([
        this.dataSource.manager.findOneBy(Guest, {
          zaloId: createOrderDto.zaloId,
        }),
        this.dataSource.manager.findOneBy(Employee, {
          id: createOrderDto.employeeId,
        }),
        this.dataSource.manager.findOneBy(MenuChoices, {
          id: createOrderDto.menuChoicesId,
        }),
      ]);

      newOrder.guest = guest;
      newOrder.employee = employee;
      newOrder.menuChoices = menuChoices;
      newOrder.noteForEmployee = createOrderDto.noteForEmployee;

      await queryRunner.manager.save(Order, newOrder);

      await queryRunner.commitTransaction();
    } catch (error) {
      console.error(error);
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      return {
        data: false,
        message: messages.error,
        status: 'NG',
        success: false,
      };
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }

    return {
      data: true,
      message: messages.created,
      status: 'OK',
      success: true,
    };
  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
