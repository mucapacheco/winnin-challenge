import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const ConfigDatabaseSqlLite: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: './mydb.sqlite',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
  //logging: true,
};
