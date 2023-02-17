import { Module } from '@nestjs/common';
import { MessageController } from 'src/message/infraestructure/http/controller/message.controller';

@Module({
  imports: [],
  controllers: [MessageController],
  providers: [],
})
export class MessageModule {}
