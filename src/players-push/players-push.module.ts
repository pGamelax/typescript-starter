import { Module } from '@nestjs/common';
import { PlayersPushController } from './players-push.controller';
import { PrismaService } from 'src/services/prisma.service';
import { PlayersPushService } from './players-push.service';
import { ClashService } from 'src/services/clash.service';
import { HttpModule } from '@nestjs/axios';
import { AuthGuard } from 'src/auth/auth.guard';

import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Module({
  imports: [HttpModule],
  controllers: [PlayersPushController],
  exports: [PrismaService, ClashService],
  providers: [PrismaService, PlayersPushService, ClashService, AuthGuard, JwtService, UsersService]
})
export class PlayersPushModule {}
