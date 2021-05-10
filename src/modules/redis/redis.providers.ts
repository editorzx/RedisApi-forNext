import { Provider } from '@nestjs/common';

import IORedis, { Redis } from 'ioredis';

import { REDIS_PUBLISHER_CLIENT, REDIS_SUBSCRIBER_CLIENT } from './redis.constants';

export const redisProviders: Provider[] = [
  {
    useFactory: (): Redis => {
      return new IORedis({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 1433),
        password: process.env.DB_PASSWORD,
      });
    },
    provide: REDIS_SUBSCRIBER_CLIENT,
  },
  {
    useFactory: (): Redis => {
      return new IORedis({
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 1433),
        password: process.env.DB_PASSWORD,
      });
    },
    provide: REDIS_PUBLISHER_CLIENT,
  },
];