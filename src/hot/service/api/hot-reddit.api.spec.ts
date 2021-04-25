import { Test, TestingModule } from '@nestjs/testing';
import { HotRedditApi } from './hot-reddit.api';
import { HttpModule } from '@nestjs/common';
import { Hot } from '../../entity/Hot.entity';

describe('HotRedditApis', () => {
  let provider: HotRedditApi;
  let data: Hot[] = null;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [HotRedditApi],
    }).compile();

    provider = module.get<HotRedditApi>(HotRedditApi);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });

  it('returned data', () => {
    return expect(
      provider.getAll().then((list) => (data = list)),
    ).resolves.toBeInstanceOf(Array);
  });

  it('data has hot', () => {
    return expect(data[0]).toBeInstanceOf(Hot);
  });

  it('hot has author', () => {
    return expect(data[0].author).toBeDefined();
  });
});
