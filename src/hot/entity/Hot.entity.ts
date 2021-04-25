import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, charset: 'utf8' })
  title: string;

  @Column({ length: 100 })
  author: string;

  @Column()
  created: Date;

  @Column('int')
  ups: number;

  @Column('int')
  num_comments: number;
}
