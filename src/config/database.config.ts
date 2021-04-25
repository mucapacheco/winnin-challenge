import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const ConfigDatabaseMysql: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: +process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASS,
  database: process.env.DATABASE_DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  charset: 'utf8',
};
