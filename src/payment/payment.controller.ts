import {
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { TicketsService } from 'src/tickets/tickets.service';
import { PlayersPushService } from 'src/players-push/players-push.service';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly ticketService: TicketsService,
    private readonly playerPushService: PlayersPushService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post('/generate-pix/:ticket')
  async generatePix(@Req() req, @Param() params: { ticket: string }) {
    const ticket = await this.ticketService.getTicketUUID({
      uuid: params.ticket,
    });
    const webhookUrl = `https://api.clashcup.pro/webhook/payment/${req.user.sub}/${ticket.season}`;
    const data = await this.paymentService.generatePix(
      ticket.value,
      webhookUrl,
    );
    return data;
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post('/verify')
  async verifyPayment(@Req() req) {
    return this.playerPushService.playerInSeason(req.user.sub, '202508');
  }
}
