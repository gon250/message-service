import { Controller, Get, Post } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Post()
  async sendMessageTest(): Promise<void> {}

  @Get('/health')
  getHealth(): string {
    return 'Ok';
  }
}
