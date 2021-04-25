import { Test, TestingModule } from '@nestjs/testing';
import { HotController } from './hot.controller';
import { HotRedditDatabase } from '../../service/database/hot-reddit.database';
import { HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hot } from '../../entity/Hot.entity';
import { HotRedditIntegration } from '../../service/integration/hot-reddit.integration';
import { HotRedditApi } from '../../service/api/hot-reddit.api';
import { HotTask } from '../../tasks/hot.task';
import { ConfigDatabaseSqlLite } from '../../../config/database.test.config';
import { DefaultDto } from './DTOs/Request/DefaultDto';
import { UsersDto } from './DTOs/Request/UsersDto';

describe('HotController', () => {
  let controller: HotController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule,
        TypeOrmModule.forRoot(ConfigDatabaseSqlLite),
        TypeOrmModule.forFeature([Hot]),
      ],
      providers: [
        HotRedditIntegration,
        HotRedditApi,
        HotRedditDatabase,
        HotTask,
      ],
      controllers: [HotController],
    }).compile();

    controller = module.get<HotController>(HotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getDefault', () => {
    it('should return an array of hots', async () => {
      const dto = new DefaultDto();
      dto.order = 'ups';
      dto.startDate = '2000-04-24';
      dto.endDate = '2100-04-24';
      await expect(controller.getDefault(dto)).resolves.toBeInstanceOf(Array);
    });
  });
  describe('getUsers', () => {
    it('should return an array of users', async () => {
      const dto = new UsersDto();
      dto.order = 'ups';
      await expect(controller.getUsers(dto)).resolves.toBeDefined();
    });
  });
});
