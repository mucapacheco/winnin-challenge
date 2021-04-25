import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { HotRedditIntegration } from '../service/integration/hot-reddit.integration';

@Injectable()
export class HotTask {
  private readonly logger = new Logger(HotTask.name);

  constructor(private service: HotRedditIntegration) {}

  //Run at 4:20 pm :)
  //@Cron('20 16 * * * *')
  //Colcando para rodar a cada segundos, para ficar mais fácil para testar.
  @Cron('*/10 * * * * *')
  handleCron() {
    this.service
      .execute()
      .then(() => this.logger.debug('Process has been Finished'));
  }
}
