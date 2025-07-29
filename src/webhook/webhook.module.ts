import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { WebhookController } from './webhook.controller';
import { WebhookService } from './webhook.service';
import { UsersService } from 'src/users/users.service';
import { PlayersPushService } from 'src/players-push/players-push.service';
import { PlayersPushModule } from 'src/players-push/players-push.module';
import { PaymentGateway } from 'src/events/payment.gateway';

@Module({
  providers: [PrismaService, WebhookService, UsersService, PlayersPushService, PaymentGateway],
  controllers: [WebhookController],
  imports: [PlayersPushModule]
})
export class WebhookModule {}
