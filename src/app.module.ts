import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IslasModule } from './islas/islas.module';

@Module({
  imports: [IslasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
