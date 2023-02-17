import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Inject } from '@nestjs/common';

import { SendMessageCommand } from 'src/message/application/command/send-message/send-message.command';
import { MESSAGE_PROVIDER, MessageProvider } from 'src/message/domain/message.provider';

@CommandHandler(SendMessageCommand)
export class SendMessageCommandHandler implements ICommandHandler<SendMessageCommand> {
  constructor(@Inject(MESSAGE_PROVIDER) private messageProvider: MessageProvider) {}

  async execute(command: SendMessageCommand): Promise<any> {
    const { to, message } = command;
    return await this.messageProvider.send(to, message);
  }
}
