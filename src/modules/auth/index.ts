import { Module } from '@nestjs/common';
import { AuthService } from './service';
import { AuthController } from './controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    JwtModule.register({
      secretOrPrivateKey: 'nihaosaoa',
      signOptions: {
        expiresIn: '30 days',
      },
      verifyOptions: {
        ignoreExpiration: false,
      },
    }),
  ],
})
export default class AuthModule {}
