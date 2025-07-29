import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class ClashService {
  constructor(private readonly httpService: HttpService) {}

  async getAccount({ tag }: { tag: string }) {
    const { data } = await firstValueFrom(
      this.httpService
        .get(
          `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN_CLASH}`,
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );

    if (data.reason == 'notFound') {
      return false;
    }

    return data;
  }

  async verifyTokenAPI({
    playerTag,
    token,
  }: {
    playerTag: string;
    token: string;
  }) {
    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.clashofclans.com/v1/players/${encodeURIComponent(playerTag)}/verifytoken`,
          { token: token },
          {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN_CLASH}`,
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );

    if (data.status == 'invalid') {
      return false;
    }

    return true;
  }

  async getPlayerTrophies(tag: string) {
    const { data } = await firstValueFrom(
      this.httpService.get(
        `https://api.clashofclans.com/v1/players/${encodeURIComponent(tag)}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TOKEN_CLASH}`,
          },
        },
      ),
    );

    return { name: data.name, trophies: data.trophies, tag: data.tag };
  }
}
