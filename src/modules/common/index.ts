import { Module, Global } from '@nestjs/common';
import CommonService from './service';
import CommonController from './controller';

@Module({
  controllers: [CommonController],
  providers: [CommonService],
  exports: [CommonService],
})
export default class CommonModule {}
