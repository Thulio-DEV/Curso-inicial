import { Module } from '@nestjs/common';
import { Courses3Controller } from './courses3.controller';

@Module({
  controllers: [Courses3Controller]
})
export class Courses3Module {}
