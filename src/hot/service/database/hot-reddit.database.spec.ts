import { Test, TestingModule } from '@nestjs/testing';
import { HotRedditDatabase } from './hot-reddit.database';
import { Hot } from '../../entity/Hot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigDatabaseSqlLite } from '../../../config/database.test.config';

describe('HotRedditDatabase.Ts', () => {
  let provider: HotRedditDatabase;
  const author = 'Samuel Pacheco Pereira';
  const title = 'Winnin Challenge';

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot(ConfigDatabaseSqlLite),
        TypeOrmModule.forFeature([Hot]),
      ],
      providers: [HotRedditDatabase],
    }).compile();

    provider = module.get<HotRedditDatabase>(HotRedditDatabase);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('saved hotlist', async () => {
    const hot = new Hot();
    hot.author = author;
    hot.created = new Date('2020-04-24 12:00');
    hot.num_comments = 2;
    hot.ups = 10;
    hot.title = title;
    await expect(provider.save(hot)).resolves.toBeInstanceOf(Hot);
  });

  it('getOne hotlist', async () => {
    await expect(
      provider.getOneByAuthorAndTitle(author, title),
    ).resolves.toBeInstanceOf(Hot);
  });

  it('get hotlist', async () => {
    const startDate = '2000-04-24';
    const endDate = '2100-04-25';
    await expect(
      provider.get({ startDate, endDate, order: 'ups' }),
    ).resolves.toBeInstanceOf(Array);
  });

  it('get users', async () => {
    await expect(provider.getUsers()).resolves.toBeDefined();
  });
});
