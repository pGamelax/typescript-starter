import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { PushinPayService } from 'src/services/pushinpay.service';

@Injectable()
export class PaymentService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pushinPayService: PushinPayService,
  ) {}

  generatePix(value: number, webhookUrl: string) {
    return this.pushinPayService.generatePix({ price: value, webhookUrl });
  }
}
