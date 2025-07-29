import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaService } from 'src/services/prisma.service';
import { UsersController } from './users.controller';
import { ClashService } from 'src/services/clash.service';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from 'src/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from 'src/auth/constants';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  providers: [
    UsersService,
    PrismaService,
    ClashService,
    AuthService,
    JwtService,
    JwtStrategy
  ],
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  exports: [UsersService, JwtStrategy],
  controllers: [UsersController],
})
export class UsersModule {}
