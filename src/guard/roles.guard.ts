/**
 * 守卫的责任就是确定请求是否应该由路由处理程序处理；
 * 通过给特定的路由处理程序添加元数据，再通过反射器Reflector通过指定的键反射元数据找到特定的处理程序，在守卫中判断请求的条件是否满足，满足才可以进入特定的路由处理程序，
 * 守卫返回true，将处理用户调用，返回false，忽略当前处理的请求
 */

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    console.log(roles);
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => user.roles.some((role) => roles.includes(role));
    return user && user.roles && hasRole();
  }
}
