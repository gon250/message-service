import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { MessageController } from 'src/message/infraestructure/http/controller/message.controller';
import { MESSAGE_PROVIDER } from 'src/message/domain/message.provider';
import { WhatsappJsProvider } from 'src/message/infraestructure/provider/whatsapp-js.provider';
import { SendMessageCommandHandler } from 'src/message/application/command/send-message/send-message.command-handler';
import { WhatsappJsClient } from 'src/message/infraestructure/http/client/whatsapp-js.client';

export const CommandHandlers = [SendMessageCommandHandler];

@Module({
  imports: [CqrsModule],
  controllers: [MessageController],
  providers: [
    ...CommandHandlers,
    {
      provide: MESSAGE_PROVIDER,
      useClass: WhatsappJsProvider,
    },
    WhatsappJsClient,
  ],
  exports: [],
})
export class MessageModule {}
