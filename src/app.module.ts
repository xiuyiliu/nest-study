import { LoggerMiddleware } from './middleware/logger.middleware';
import { LoggerMiddleware2 } from './middleware/logger2.middleware';
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
      .apply(LoggerMiddleware, LoggerMiddleware2)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
