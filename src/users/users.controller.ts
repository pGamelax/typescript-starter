import {
  Body,
  Controller,
  Post,
  HttpCode,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClashService } from 'src/services/clash.service';
import * as bcrypt from 'bcrypt';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private clashService: ClashService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() registerDto: Record<string, any>) {

    const salt = await bcrypt.genSalt();
    const password = registerDto.password;
    const hash = await bcrypt.hash(password, salt);

    const isValidToken = await this.clashService.verifyTokenAPI({
      playerTag: registerDto.tag,
      token: registerDto.token,
    });

    if (!isValidToken) throw new BadRequestException('Invalid token');

    const account = await this.clashService.getAccount({
      tag: registerDto.tag,
    });

    if (account == false) throw new BadRequestException('Invalid tag');

    const userCreated = await this.userService.createUser({
      email: registerDto.email,
      phone: registerDto.phone,
      password: hash,
      tag: registerDto.tag,
      username: account.name,
    });

    if (!userCreated) throw new InternalServerErrorException();
    return this.authService.signIn(userCreated.email, registerDto.password); 
  }
}
