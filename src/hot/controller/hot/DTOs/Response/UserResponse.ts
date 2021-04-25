import { ApiProperty } from '@nestjs/swagger';
import { Hot } from '../../../../entity/Hot.entity';

export class UserResponse extends Hot {
  @ApiProperty({ example: '1' })
  author: string;

  @ApiProperty({ example: 590 })
  ups: number;

  @ApiProperty({ example: 10 })
  num_comments: number;
}
