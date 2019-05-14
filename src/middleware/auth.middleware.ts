import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import {
  UNNECESSARY_AUTH_ROUTER_PATH,
  JWT_SECRET_KEY,
} from '../config/server.config';
import { verify, VerifyErrors } from 'jsonwebtoken';
import { createErrorData } from '../utils/common';
import {JwtPayload} from '../interface/jwt.interface';

function checkRouterNeedsAuth(path: string): boolean {
  const PATH = path.startsWith('/api') ? path.slice(4) : path;
  for (const router of UNNECESSARY_AUTH_ROUTER_PATH) {
    if (PATH === router) {
      return true;
    }
  }
  return false;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const isUnnecessaryAuthRouter = checkRouterNeedsAuth(req.baseUrl);
    if (isUnnecessaryAuthRouter) {
      return next();
    }
    const { authorization } = req.headers;
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      const token = authorization.split(' ')[1];
      verify(token, JWT_SECRET_KEY, (err: VerifyErrors, decoded: JwtPayload) => {
        if (err) {
          return res.status(403).json(createErrorData(`403`, `${err}`));
        } else {
          req['user'] = decoded;
          return next();
        }
      });
    } else {
      return res.status(401).json(createErrorData('you must provide a valid authenticated access token'));
    }
  }
}
