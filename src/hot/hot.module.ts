import { HttpModule, Module } from '@nestjs/common';
import { HotRedditApi } from './service/api/hot-reddit.api';
import { HotRedditDatabase } from './service/database/hot-reddit.database';
import { Hot } from './entity/Hot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotRedditIntegration } from './service/integration/hot-reddit.integration';
import { HotTask } from './tasks/hot.task';
import { HotController } from './controller/hot/hot.controller';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Hot])],
  providers: [HotRedditIntegration, HotRedditApi, HotRedditDatabase, HotTask],
  controllers: [HotController],
})
export class HotModule {}
