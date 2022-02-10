import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

dotenv.config()

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'entity_demo',
  port: 5432,
  username: process.env.DB_USERNAME || 'user_1',
  password: process.env.DB_PASSOWRD || 'test1',
  entities: ['dist/src/**/*.entity.js'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
  namingStrategy: new SnakeNamingStrategy()
};
export default typeormConfig;