import { Body, Controller, Post } from '@nestjs/common';

import { SendMessageRequest } from 'src/message/infraestructure/http/controller/request/send-message.request';

@Controller('message')
export class MessageController {
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendMessage(@Body() sendMessageRequest: SendMessageRequest): Promise<void> {
    return Promise.resolve();
  }
}
