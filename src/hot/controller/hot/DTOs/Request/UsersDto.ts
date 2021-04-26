import { Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({ example: 'ups' })
  @Matches('^(ups|num_comments)$', 'i', {
    message: 'Select `ups` or `num_comments`',
  })
  order: string;
}
