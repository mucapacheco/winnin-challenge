import { HttpService, Injectable } from '@nestjs/common';
import { Hot } from '../../entity/Hot.entity';

@Injectable()
export class HotRedditApi {
  constructor(private httpService: HttpService) {}

  public getAll() {
    return this.httpService
      .get('https://api.reddit.com/r/artificial/hot')
      .toPromise()
      .then((result) =>
        result?.data?.data?.children?.map((child) => {
          const hot = new Hot();
          hot.author = child.data.author;
          hot.ups = child.data.ups;
          hot.title = child.data.title;
          hot.num_comments = child.data.num_comments;
          hot.created = new Date(child.data.created * 1000);
          return hot;
        }),
      );
  }
}
