/**
 * 管道将输入数据转换为所需的输出
 * 管道可以是方法范围的，控制器范围的，全局范围的，还可以是参数范围的；
 */
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class BooleanPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else {
      throw new BadRequestException('Incorrect parameter type');
    }
  }
}
