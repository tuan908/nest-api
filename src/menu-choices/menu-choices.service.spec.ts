import {TestingModule} from '@nestjs/testing/testing-module';
import {MenuChoiceService} from './menu-choices.service';
import {Test} from '@nestjs/testing/test';

describe('MenuChoiceService', () => {
  let service: MenuChoiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuChoiceService],
    }).compile();

    service = module.get<MenuChoiceService>(MenuChoiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
