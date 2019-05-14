import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { AuthController } from './controller';
import {JwtConfig} from '../../config/server.config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [JwtConfig],
})
export default class AuthModule {}
