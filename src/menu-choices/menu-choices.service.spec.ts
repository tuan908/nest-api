import {TestingModule} from '@nestjs/testing/testing-module';
import {MenuChoicesService} from './menu-choices.service';
import {Test} from '@nestjs/testing/test';

describe('MenuChoiceService', () => {
  let service: MenuChoicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuChoicesService],
    }).compile();

    service = module.get<MenuChoicesService>(MenuChoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
