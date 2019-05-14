import { DynamicModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

export const JWT_SECRET_KEY = 'nihaosaoa';

export const JwtConfig: DynamicModule = JwtModule.register({
  secretOrPrivateKey: JWT_SECRET_KEY,
  signOptions: {
    expiresIn: '30 days',
  },
  verifyOptions: {
    ignoreExpiration: false,
  },
});

export const UNNECESSARY_AUTH_ROUTER_PATH: string[] = ['/auth/login-by-phone'];
// export const UNNECESSARY_AUTH_ROUTER_PATH: string[] = [];
