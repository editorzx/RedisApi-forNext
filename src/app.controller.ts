import { Controller, Get, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res) { //getHello(): string
	return res.redirect('http://kdxr.xyz');
    //return this.appService.getHello();
  }
}
