import { LoggerMiddleware } from './middleware/logger.middleware';
import { AuthMiddleware} from './middleware/auth.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import module from './modules';

@Module({
  imports: [...module],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer
      .apply(LoggerMiddleware, AuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
