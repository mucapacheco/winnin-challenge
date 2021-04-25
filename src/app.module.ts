import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabaseMysql } from './config/database.config';
import { ScheduleModule } from '@nestjs/schedule';
import { HotModule } from './hot/hot.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ConfigDatabaseMysql),
    ScheduleModule.forRoot(),
    HotModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
