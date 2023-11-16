import { Test, TestingModule } from '@nestjs/testing';
import { MenuChoiceController } from './menu-choices.controller';
import { MenuChoiceService } from './menu-choices.service';

describe('MenuChoiceController', () => {
  let controller: MenuChoiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuChoiceController],
      providers: [MenuChoiceService],
    }).compile();

    controller = module.get<MenuChoiceController>(MenuChoiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
