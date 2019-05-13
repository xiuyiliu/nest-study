import {Injectable} from '@nestjs/common';
import {JwtPayload} from '../../interface/jwt.interface';
import { JwtService } from '@nestjs/jwt';
import ServiceExt from '../../utils/serviceExt';
import { ResData } from '../../utils/common';

@Injectable()
export class AuthService extends ServiceExt {
  constructor(private readonly jwtService: JwtService) {
    super();
  }
  private createToken(phone: number): string {
    const user: JwtPayload = {phone};
    return this.jwtService.sign(user);
  }
  public loginByPhone(body): ResData {
    const token = this.createToken(body.phone);
    return this.createResData({phone: body.phone}, '200', 'success', true, {token});
  }
}
