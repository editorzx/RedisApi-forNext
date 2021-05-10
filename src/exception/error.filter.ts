import { ExceptionFilter, Catch, ArgumentsHost, HttpStatus } from '@nestjs/common'
import { ErrorResponse } from './error.response'

@Catch()
export class ErrorFilter implements ExceptionFilter {
  protected context
  protected message
  protected code = HttpStatus.INTERNAL_SERVER_ERROR

  catch(error: Error, host: ArgumentsHost) {
    this.context = host.switchToHttp()
    this.message = error.message
    this.prepare(error)
    this.render()
  }

  protected render() {
    ErrorResponse.render(this.context, this.message, this.code)
  }

  protected prepare(error) {
    // Do something
    console.log(error)
  }
}
