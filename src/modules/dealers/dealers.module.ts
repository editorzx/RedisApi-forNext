import { Module } from '@nestjs/common'
import { RedisModule} from '../redis/redis.module'
import { DealerController } from "./controllers/dealers.controller";
import { DealerService } from './services/dealers.service';

@Module({
  imports: [
    RedisModule
  ],
  controllers: [
    DealerController
  ],
  providers: [
    DealerService
  ],
})
export class DealerModule {}