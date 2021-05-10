import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AppTransformers } from './app.transformer'

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  constructor(
    private readonly appTransformers: AppTransformers
  ) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        const req = context.switchToHttp().getRequest()
        const response = this.appTransformers.defaultTransformer(data)
        req.res.header('X-Build-Number', process.env.BUILDNUMBER)

        return response
      })
    )
  }
}
