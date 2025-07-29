import { Controller, Get, Param } from '@nestjs/common';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketService: TicketsService) {}

  @Get('/:mode')
  async getTickets(@Param() params: any): Promise<any> {
    const output = await this.ticketService.getTickets(params.mode);

    return output;
  }

}
