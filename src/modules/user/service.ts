import { Injectable, HttpService } from '@nestjs/common';
import {ServiceExt} from '../../utils/serviceExt';
import {Observable} from 'rxjs';
import {AxiosResponse} from 'axios';

@Injectable()
export default class UserService extends ServiceExt {
  constructor(private readonly httpService: HttpService) {
    super();
  }
  // 支持异步
  public async getQuery(name): Promise<string> {
    return `hello ${name}`;
  }
  public async getParams(id): Promise<number> {
    return id;
  }
  public async httpServerTest(): Promise<AxiosResponse> {
    const {data} = await this.httpService.get('http://localhost:3000/common').toPromise();
    return data;
  }
}
