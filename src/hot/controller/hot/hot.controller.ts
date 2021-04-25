import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { DefaultDto } from './DTOs/Request/DefaultDto';
import { HotRedditDatabase } from '../../service/database/hot-reddit.database';
import { UsersDto } from './DTOs/Request/UsersDto';
import { ApiResponse } from '@nestjs/swagger';
import { HotResponse } from './DTOs/Response/HotResponse';
import { UserResponse } from './DTOs/Response/UserResponse';

@Controller('hot')
export class HotController {
  constructor(private readonly service: HotRedditDatabase) {}

  @ApiResponse({ status: 200, type: HotResponse })
  @Get('/default')
  public getDefault(@Query(new ValidationPipe()) options: DefaultDto) {
    return this.service.get(options);
  }

  @ApiResponse({ status: 200, type: UserResponse })
  @Get('/users')
  public getUsers(@Query(new ValidationPipe()) options: UsersDto) {
    return this.service.getUsers(options.order);
  }
}
