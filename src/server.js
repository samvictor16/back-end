const express = require('express');
const http = require('http');
const cors = require('cors');
require('dotenv').config();

const socketService = require('./services/socketService');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const server = http.createServer(app);

// Inicializa o Socket.io no servidor HTTP
socketService.initSocket(server);

app.use(cors());
app.use(express.json());

// Registra as Rotas
app.use('/api/produtos', productRoutes);
app.use('/api/pedidos', orderRoutes);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});