const socketService = require('../services/socketService');

// Simulação de banco em memória (substitua por Prisma/Banco depois)
const orders = [];

// Criar novo pedido (Cliente)
exports.createOrder = (req, res) => {
  const { items, tableNumber, total } = req.body;

  const newOrder = {
    id: Date.now().toString(),
    items,
    tableNumber,
    total,
    status: 'PREPARANDO',
    createdAt: new Date()
  };

  orders.push(newOrder);

  // NOTIFICA A COZINHA EM TEMPO REAL
  socketService.emitNewOrder(newOrder);

  return res.status(201).json({
    message: 'Pedido enviado para a cozinha com sucesso!',
    order: newOrder
  });
};

// Listar todos os pedidos (Cozinha)
exports.getOrders = (req, res) => {
  return res.json(orders);
};