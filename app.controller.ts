import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/Hello-World')
  HelloWord(): string {
    return this.appService.HelloWord();
  }
  @Get('BSM')
  BSM(): string{
    return this.appService.Bsm();
  }

  @Get('/objetivo')
  objetivo(): string{
    return this.appService.objetivo();
  }

  }

