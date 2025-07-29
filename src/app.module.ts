import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HttpModule } from '@nestjs/axios';
import { PaymentModule } from './payment/payment.module';
import { WebhookController } from './webhook/webhook.controller';
import { WebhookService } from './webhook/webhook.service';
import { TicketsModule } from './tickets/tickets.module';
import { WebhookModule } from './webhook/webhook.module';
import { PlayersPushController } from './players-push/players-push.controller';
import { PlayersPushService } from './players-push/players-push.service';
import { PlayersPushModule } from './players-push/players-push.module';


@Module({
  imports: [AuthModule, UsersModule, HttpModule, PaymentModule, WebhookModule, TicketsModule, PlayersPushModule],
  controllers: [AppController, PlayersPushController, ],
  providers: [AppService, PlayersPushService, ],
})
export class AppModule {}
