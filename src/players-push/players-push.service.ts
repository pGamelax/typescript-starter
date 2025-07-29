import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { ClashService } from 'src/services/clash.service';
import { PrismaService } from 'src/services/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PlayersPushService {
  constructor(
    private readonly userService: UsersService,
    private readonly prismaService: PrismaService,
    private readonly clashService: ClashService,
  ) {}

  async addPlayerPush(data: Prisma.PlayerPushCreateInput) {
    return await this.prismaService.playerPush.create({ data });
  }

  async getPlayerSeason(where: Prisma.PlayerPushWhereInput, id: number) {
    const data = await this.prismaService.playerPush.findMany({
      where,
      include: {
        user: { select: { tag: true } },
      },
    });

    const user = await this.userService.findOne({ where: { id: id } });

    const playerTrophies = Promise.all(
      data.map(async (item) => {
        return await this.clashService.getPlayerTrophies(item.user.tag);
      }),
    );

    (await playerTrophies).sort((a: any, b: any) => b.trophies - a.trophies);

    const playersList = (await playerTrophies)
      .sort((a: any, b: any) => b.trophies - a.trophies)
      .map((item: any, index: number) => ({
        ...item,
        rank: index + 1,
      }));

    const playerData = playersList.filter((item) => item.tag == user.tag)
  
    return { playerData, playersList };
  }
}
