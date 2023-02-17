import { Body, Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { SendMessageRequest } from 'src/message/infraestructure/http/controller/request/send-message.request';
import { SendMessageCommand } from 'src/message/application/command/send-message/send-message.command';
import { SendMessageException } from 'src/message/domain/exception/send-message.exception';

@Controller('message')
export class MessageController {
  constructor(private commandBus: CommandBus) {}

  @Post()
  async sendMessage(@Body() sendMessageRequest: SendMessageRequest): Promise<void> {
    const { to, message } = sendMessageRequest;

    try {
      return this.commandBus.execute(new SendMessageCommand(to, message));
    } catch (exception) {
      if (exception instanceof SendMessageException) {
        // TODO: Log exception
        throw exception;
      }

      throw new InternalServerErrorException({
        message: exception.message,
        trace: exception.stack,
      });
    }
  }
}
