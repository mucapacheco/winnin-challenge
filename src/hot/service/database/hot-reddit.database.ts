import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hot } from '../../entity/Hot.entity';
import { Between, Repository } from 'typeorm';

@Injectable()
export class HotRedditDatabase {
  constructor(
    @InjectRepository(Hot) private readonly repository: Repository<Hot>,
  ) {}

  public save(hot: Hot): Promise<Hot> {
    return this.repository.save(hot);
  }

  public getOneByAuthorAndTitle(author, title) {
    return this.repository.findOne({ where: { author, title } });
  }

  public get({ startDate, endDate, order = 'ups' }) {
    const _order = {};
    _order[order] = 'DESC';

    return this.repository.find({
      where: (q) => {
        q.where({ created: Between(startDate, endDate) });
      },
      order: _order,
    });
  }

  public getUsers(order = 'ups') {
    if (!['ups', 'num_comments'].includes(order)) {
      throw new Error('Select ups or comments.');
    }

    return this.repository
      .createQueryBuilder('h')
      .select(['h.author as author', `count(${order}) as ${order}`])
      .groupBy('h.author')
      .orderBy('2', 'DESC')
      .getRawMany();
  }
}
