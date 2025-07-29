import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {

    const user = await this.usersService.findOne({ where: { email } });
  
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret}),
    };
  }

  getProfile(user: any) {
    // Você pode consultar o banco, ou apenas tratar o dado
    return user;
  }
}
