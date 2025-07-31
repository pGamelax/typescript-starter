import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PaymentGateway {
  @WebSocketServer()
  server: Server;

  sendPaymentConfirmed(userId: string) {
    this.server.to(userId).emit('payment_confirmed');
  }

  handleConnection(socket: any) {
    const userId = socket.handshake.query.userId;
    if (userId) {
      socket.join(userId);
    }
  }
}
