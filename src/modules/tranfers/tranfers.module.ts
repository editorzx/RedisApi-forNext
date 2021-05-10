import { Module } from '@nestjs/common'
import { RedisModule} from '../redis/redis.module'
import { TranferController } from "./controllers/tranfers.controller";
import { TranfersService } from './services/tranfers.service';

@Module({
  imports: [
    RedisModule
  ],
  controllers: [
    TranferController
  ],
  providers: [
    TranfersService
  ],
})
export class TranfersModule {}