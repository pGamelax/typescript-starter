import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class PushinPayService {
  constructor(private readonly httpService: HttpService) {}

  async generatePix({
    price,
    webhookUrl,
  }: {
    price: number;
    webhookUrl: string;
  }) {
    const { data } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.pushinpay.com.br/api/pix/cashIn`,
          {
            value: Number(price),
            webhook_url: webhookUrl,
            split_rules: [],
          },
          {
            headers: {
              Authorization: `Bearer ${process.env.TOKEN_PUSHINPAY}`,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        )
        .pipe(
          catchError((error: AxiosError) => {
     
            throw error;
          }),
        ),
    );

    return data;
  }
}
