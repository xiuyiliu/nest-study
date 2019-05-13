/**
 * 中间件是一个在路由处理器之前被调用的函数（实现NestMiddleware接口且被@Injectable装饰器修饰的类）
 * 中间件可以访问请求对象和相应对象
 */

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void): any {
    console.log('logger');
    next();
  }
}
