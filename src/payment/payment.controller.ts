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

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private readonly ticketService: TicketsService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard)
  @Post('/generate-pix/:ticket')
  async generatePix(@Req() req, @Param() params: { ticket: string }) {
    const ticket = await this.ticketService.getTicketUUID({
      uuid: params.ticket,
    });
    const webhookUrl = `https://8aa708e57135.ngrok-free.app/webhook/payment/${req.user.sub}/${ticket.season}`;
    const data = await this.paymentService.generatePix(
      ticket.value,
      webhookUrl,
    );
    return data;
  }
}
