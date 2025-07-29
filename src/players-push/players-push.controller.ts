import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { PlayersPushService } from './players-push.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('players-push')
export class PlayersPushController {
  constructor(private readonly playerPushService: PlayersPushService) {}

  @UseGuards(AuthGuard)
  @Get('/:season')
  async getPlayersPush(@Req() req, @Param() params: { season: string }) {

    return await this.playerPushService.getPlayerSeason(
      {
        season: params.season,
      },
      Number(req.user.sub),
    );
  }
}
