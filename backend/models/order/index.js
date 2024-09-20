const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  item: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);