import { Module } from '@nestjs/common'
import { RedisModule} from '../redis/redis.module'
import { EmployeeController } from "./controllers/employee.controller";
import { EmployeeService } from './services/employee.service';

@Module({
  imports: [
    RedisModule
  ],
  controllers: [
    EmployeeController
  ],
  providers: [
    EmployeeService
  ],
})
export class EmployeeModule {}