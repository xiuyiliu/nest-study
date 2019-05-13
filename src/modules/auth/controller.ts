import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login-by-phone')
  loginByPhone(@Body() body) {
    return this.authService.loginByPhone(body);
  }
}
