import { Controller, Get, Query, Param, HttpException, HttpStatus, ParseIntPipe, UseGuards, SetMetadata } from '@nestjs/common';
import UserService from './service';
import CommonService from '../common/service';
import {BooleanPipe} from '../../pipe/boolean.pipe';
import {RolesGuard} from '../../guard/roles.guard';
import {Roles} from '../../decorator/roles.decorator';

// 此处是类装饰器
// 类装饰器：应用于类构造函数，可以用来监视，修改，替换类定义，类的构造函数作为其唯一的参数
@Controller('user')
@UseGuards(RolesGuard)
// 传入的参数在定义路由前缀，
export default class UserController {
  // 在此处注入依赖
  constructor(
    private readonly userService: UserService,
    private readonly commonService: CommonService,
  ) {}

  // 方法装饰器：可用用来监视，修改或者替换方法的定义，
  // 三个参数，1：对于静态成员来说是类的构造函数，对于实例成员是类的原型对象，2：成员的名字，3：成员的属性描述符
  @Get('hello')
  async getHelloWorld() {
    return this.commonService.helloWorld();
  }
  @Get('http-server-test')
  async getHttp() {
    return this.userService.httpServerTest();
  }
  @Get(':id')
  @Roles('admin')
  async getParams(@Param('id', new ParseIntPipe()) id) {
    return this.userService.getParams(id);
  }
  @Get('error')
  async getError() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  @Get()
  async getQuery(@Query('name') name: string) {
    return this.userService.getQuery(name);
  }
}
