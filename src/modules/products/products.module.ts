import { Module } from '@nestjs/common'
import { RedisModule} from '../redis/redis.module'
import { ProductController } from "./controllers/products.controller";
import { ProductService } from './services/products.service';

@Module({
  imports: [
    RedisModule
  ],
  controllers: [
    ProductController
  ],
  providers: [
    ProductService
  ],
})
export class ProductModule {}