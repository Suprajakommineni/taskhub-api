import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  

  @Get('health')
  getHealth(): string {
    return ' NEST API runs with a clean starter structure';
  }
}
