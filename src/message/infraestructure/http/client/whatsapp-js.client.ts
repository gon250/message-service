import { Injectable } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class WhatsappJsClient {
  private readonly _client: Client;

  constructor() {
    this._client = new Client({ authStrategy: new LocalAuth() });

    this._client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });

    this._client.on('ready', () => {
      console.log('Client is ready!');
    });

    this._client.initialize();
  }

  get client(): Client {
    return this._client;
  }
}
