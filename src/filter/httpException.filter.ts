/**
 * 一个复杂系统需要自顶向下的纵向划分成多个模块，一个统一的异常处理层作为一个横向的切面贯穿我们系统中的所有模块，这种编程方式称为面向切面编程（AOP）
 * 异常过滤器拥有对异常层的完全控制权（记录日志，自定义错误格式...）,捕获基础异常类的实例，为他们设置自定义响应逻辑
 * 异常过滤器可以是方法范围的，控制器范围的，全局范围的
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    const { error, message } = exception.message;

    response.status(status).json({
      statusCode: status,
      error,
      message,
      date: new Date().toLocaleDateString(),
      path: request.url,
    });
  }
}
