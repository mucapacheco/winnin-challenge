import { IsDateString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DefaultDto {
  @ApiProperty({ example: '2020-04-24' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2022-04-24' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ example: 'ups' })
  @Matches('^(ups|comments)$', 'i', { message: 'Select `ups` or `comments`' })
  order: string;
}
