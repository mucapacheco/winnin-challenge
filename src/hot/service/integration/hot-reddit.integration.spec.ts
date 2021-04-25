import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hot } from '../../entity/Hot.entity';
import { HotRedditDatabase } from '../database/hot-reddit.database';
import { HotRedditApi } from '../api/hot-reddit.api';
import { HotRedditIntegration } from './hot-reddit.integration';
import { HttpModule } from '@nestjs/common';
import { ConfigDatabaseSqlLite } from '../../../config/database.test.config';

describe('Hot-reddit-Integration', () => {
  let provider: HotRedditIntegration;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(ConfigDatabaseSqlLite),
        TypeOrmModule.forFeature([Hot]),
        HttpModule,
      ],
      providers: [HotRedditDatabase, HotRedditApi, HotRedditIntegration],
    }).compile();

    provider = module.get<HotRedditIntegration>(HotRedditIntegration);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('should be integrated', async () => {
    await expect(provider.execute()).resolves.toBeInstanceOf(Array);
  });
});
