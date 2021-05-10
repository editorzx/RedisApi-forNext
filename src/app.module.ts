import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core'
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { ConfigModule } from  '@nestjs/config'
import { ErrorFilter } from './exception/error.filter'
import { HttpExceptionFilter } from './exception/http-exception.filter'
import { CamelizeKeysPipe } from './pipe/camelizeKeys.pipe'
import { TransformInterceptor } from './transfromers/app.interceptor'
import { AppTransformers } from './transfromers/app.transformer'
import { ValidationPipe } from './pipe/Validation.pipe'
import { MorganModule, MorganInterceptor } from 'nest-morgan';

import { ProductModule } from './modules/products/products.module'
import { DealerModule } from './modules/dealers/dealers.module'
import { EmployeeModule } from './modules/employee/employee.module'
import { TranfersModule } from './modules/tranfers/tranfers.module'

const AppProvider = [
  {
    provide: APP_FILTER,
    useClass: ErrorFilter
  },
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter
  },
  {
    provide: APP_PIPE,
    useClass: CamelizeKeysPipe
  },
  {
    provide: APP_PIPE,
    useClass: ValidationPipe
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: TransformInterceptor
  },
  AppTransformers
]

@Module({
  imports: [
	ProductModule,
	DealerModule,
	EmployeeModule,
	TranfersModule,
	MorganModule.forRoot(),
    ConfigModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, ...AppProvider, MorganInterceptor('combined')],
})
export class AppModule {}
