import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MessageModule } from 'src/message/message.module';

@Module({
  controllers: [AppController],
  providers: [],
  imports: [MessageModule],
})
export class AppModule {}
