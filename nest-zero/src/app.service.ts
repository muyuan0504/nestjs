/** 具有单一方法的基本服务（service） */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('请求到达')
    return 'Hello World!';
  }
}
