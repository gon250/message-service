import { Injectable } from '@nestjs/common';

import { MessageProvider } from 'src/message/domain/message.provider';
import { WhatsappJsClient } from 'src/message/infraestructure/http/client/whatsapp-js.client';

@Injectable()
export class WhatsappJsProvider implements MessageProvider {
  constructor(private whatsappJsClient: WhatsappJsClient) {}

  async send(to: string, message: string): Promise<void> {
    // TODO: If all ok, messageCreated event, if not throw exception
    const messageSent = await this.whatsappJsClient.client.sendMessage(
      to,
      message,
    );

    console.log({ messageSent });
  }
}
