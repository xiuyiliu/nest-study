import { Controller, Get } from '@nestjs/common';
import CommonService from './service';

@Controller()
export default class CommonController {
  constructor(private readonly commonService: CommonService) {}

  @Get('common')
  async helloWorld() {
    return this.commonService.helloWorld();
  }
}
