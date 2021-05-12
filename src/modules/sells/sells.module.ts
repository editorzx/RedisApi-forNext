import { Module } from '@nestjs/common'
import { RedisModule} from '../redis/redis.module'
import { SellsController } from "./controllers/sells.controller";
import { SellsService } from './services/sells.service';

@Module({
  imports: [
    RedisModule
  ],
  controllers: [
    SellsController
  ],
  providers: [
    SellsService
  ],
})
export class SellsModule {}