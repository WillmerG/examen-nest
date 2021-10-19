import { Test, TestingModule } from '@nestjs/testing';
import { IslasController } from './islas.controller';

describe('IslasController', () => {
  let controller: IslasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IslasController],
    }).compile();

    controller = module.get<IslasController>(IslasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
