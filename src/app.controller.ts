import { Controller, Get , Post, Body,} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  doRegister(@Body() reqData:object):Object{
    return this.appService.doRegistration(reqData);
  }

  @Post('login')
  doLogin(@Body() reqData:object):Object{
    return this.appService.doLogin(reqData);
  }
}
