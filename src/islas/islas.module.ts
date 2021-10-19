import { Module } from '@nestjs/common';
import { IslasController } from './controller/islas/islas.controller';
import { ManejoIslasService } from './services/manejo-islas/manejo-islas.service';

@Module({
  controllers: [IslasController],
  providers: [ManejoIslasService]
})
export class IslasModule {}
