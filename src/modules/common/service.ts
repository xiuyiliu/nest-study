import { Injectable } from '@nestjs/common';
import { ServiceExt } from '../../utils/serviceExt';
import {ResData} from '../../utils/common';

@Injectable()
export default class CommonService extends ServiceExt {
  constructor() {
    super();
  }
  public helloWorld(): ResData {
    return this.createResData('hello world');
  }
}
