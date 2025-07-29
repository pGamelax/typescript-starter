import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class WebhookService {
    constructor (private readonly prismaService: PrismaService){}
}
