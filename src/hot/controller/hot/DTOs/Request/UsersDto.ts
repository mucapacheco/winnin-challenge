import { Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UsersDto {
  @ApiProperty({ example: 'ups' })
  @Matches('^(ups|comments)$', 'i', { message: 'Select `ups` or `comments`' })
  order: string;
}
