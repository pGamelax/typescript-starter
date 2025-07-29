import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from 'generated/prisma';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class TicketsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTickets(mode: Prisma.EnumModeTicketsFilter) {

    return await this.prismaService.tickets.findMany({where :{ 
        mode: mode
    }});
  }

  async getTicketUUID(where: Prisma.TicketsWhereInput){
    return await this.prismaService.tickets.findFirst({
        where
    })
  }
}
