import { Test, TestingModule } from '@nestjs/testing';
import { Courses3Controller } from './courses3.controller';

describe('Courses3Controller', () => {
  let controller: Courses3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Courses3Controller],
    }).compile();

    controller = module.get<Courses3Controller>(Courses3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
