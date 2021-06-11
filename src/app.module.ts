import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats.controller';
import { AdminController } from './admin.controller';

@Module({
  imports: [],
  controllers: [AdminController, AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
