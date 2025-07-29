import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

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
    console.log('a');
    this.server.to(userId).emit('payment_confirmed');
  }

  handleConnection(socket: any) {
    console.log(socket.id)
    const userId = socket.handshake.query.userId;
    console.log('🔌 Nova conexão WebSocket de:', userId);
    if (userId) {
      socket.join(userId);
    }
  }
}
