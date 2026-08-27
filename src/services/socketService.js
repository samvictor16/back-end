const { Server } = require('socket.io');

let io;

exports.initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*", // Permite conexões do seu front-end
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', (socket) => {
    console.log('Novo cliente conectado:', socket.id);

    // Opcional: Entrar na "sala" da cozinha
    socket.on('join_kitchen', () => {
      socket.join('kitchen');
    });
  });

  return io;
};

// Função para emitir eventos
exports.emitNewOrder = (orderData) => {
  if (io) {
    io.emit('new_order', orderData); // Envia para todos conectados
  }
};