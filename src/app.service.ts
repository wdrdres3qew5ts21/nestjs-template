import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '[8-NOV-2021] Client Engineer Training';
  }
}
