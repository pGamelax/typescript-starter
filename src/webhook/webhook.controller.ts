import { Body, Controller, Param, Post } from '@nestjs/common';
import { WebhookService } from './webhook.service';
import { PlayersPushService } from 'src/players-push/players-push.service';
import { UsersService } from 'src/users/users.service';
import { PaymentGateway } from 'src/events/payment.gateway';

@Controller('webhook')
export class WebhookController {
  constructor(
    private readonly paymentGateway: PaymentGateway,
    private readonly webhookService: WebhookService,
    private readonly playerPushService: PlayersPushService,
    private readonly userService: UsersService,
  ) {}

  @Post('/payment/:id/:season')
  async receiveWebook(
    @Body() data: any,
    @Param() params: { id: string; season: string },
  ) {
    if (data.status == 'paid') {
      const user = await this.userService.findOne({
        where: { id: Number(params.id) },
      });
      this.playerPushService.addPlayerPush({
        season: params.season,
        user: { connect: { id: user.id } },
      });

      this.paymentGateway.sendPaymentConfirmed(String(user.id))
    }
  }
}
