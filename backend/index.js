const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const transactionRoutes = require('./routes/transactionRouter');

const app = express();
const port = 8000;

// MongoDB bağlantısı
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/transactions', transactionRoutes);

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor`);
});