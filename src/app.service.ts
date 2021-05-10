import { Injectable,Redirect } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
	
    return {
      date: new Date(),
      message: 'Tracking Api Connected'
    }
  }
}
