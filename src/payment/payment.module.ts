import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/services/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { PushinPayService } from 'src/services/pushinpay.service';
import { TicketsService } from 'src/tickets/tickets.service';

@Module({
  imports: [HttpModule],
  providers: [
    PaymentService,
    AuthGuard,
    JwtService,
    PrismaService,
    PushinPayService,
    TicketsService,
  ],

  controllers: [PaymentController],
})
export class PaymentModule {}
