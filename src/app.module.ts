import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Courses3Module } from './courses3/courses3.module';
import { Courses3Controller } from './courses3/courses3.controller';

@Module({
  imports: [Courses3Module],
  controllers: [AppController, Courses3Controller],
  providers: [AppService],
})
export class AppModule {}
