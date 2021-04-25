import { Injectable } from '@nestjs/common';
import { HotRedditDatabase } from '../database/hot-reddit.database';
import { HotRedditApi } from '../api/hot-reddit.api';
import { Hot } from '../../entity/Hot.entity';

@Injectable()
export class HotRedditIntegration {
  constructor(
    private database: HotRedditDatabase,
    private readonly api: HotRedditApi,
  ) {}

  public async execute(): Promise<Hot[]> {
    const list: Hot[] = await this.api.getAll();
    for (const hot of list) {
      //Adicionei uma pequena validação para não incluir novamente.
      //Também poderia apagar tudo e incluir tudo de novo.
      const found = await this.database.getOneByAuthorAndTitle(
        hot.author,
        hot.title,
      );

      if (found) {
        continue;
      }
      await this.database.save(hot);
    }

    return list;
  }
}
