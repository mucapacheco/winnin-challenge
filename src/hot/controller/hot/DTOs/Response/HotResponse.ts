import { IsDateString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Hot } from '../../../../entity/Hot.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class HotResponse extends Hot {
  @ApiProperty({ example: '1' })
  id: number;

  @ApiProperty({ example: 'Winnin Challenge' })
  title: string;

  @ApiProperty({ example: 'Samuel Pacheco Pereira' })
  author: string;

  @ApiProperty({ example: '2020-01-24' })
  created: Date;

  @ApiProperty({ example: 590 })
  ups: number;

  @ApiProperty({ example: 10 })
  num_comments: number;
}
