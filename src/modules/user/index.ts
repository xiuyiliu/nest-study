import { Module, HttpModule } from '@nestjs/common';
import UserController from './controller';
import UserService from './service';
import CommonModule from '../common';
import {helperProvider} from '../../provider/helper.provider';
// Nest将提供者封装在模块范围内，你无法在其他地方使用一个模块的提供者而不导入该模块，除非该模块是全局模块（用Global装饰器装饰）
@Module({
  controllers: [UserController],
  providers: [UserService, helperProvider],
  imports: [CommonModule, HttpModule],
})
export default class UserModule {}
