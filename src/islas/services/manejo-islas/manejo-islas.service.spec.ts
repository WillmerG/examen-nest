import { Test, TestingModule } from '@nestjs/testing';
import { ManejoIslasService } from './manejo-islas.service';

describe('ManejoIslasService', () => {
  let service: ManejoIslasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManejoIslasService],
    }).compile();

    service = module.get<ManejoIslasService>(ManejoIslasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
