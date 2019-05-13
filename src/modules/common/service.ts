import { Injectable } from '@nestjs/common';

@Injectable()
export default class CommonService {
  public async helloWorld(): Promise<string> {
    return 'hello world!!!';
  }
}
