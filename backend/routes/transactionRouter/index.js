const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../../models/user');
const Order = require('../../models/order');

// Kullanıcı ve sipariş oluşturma işlemi (transaction)
router.post('/', async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const { userData, orderData } = req.body;

    // Kullanıcı oluştur
    const user = new User(userData);
    await user.save({ session });

    // Sipariş oluştur
    const order = new Order({
      ...orderData,
      userId: user._id,
    });
    await order.save({ session });

    // Transaction'ı commit et
    await session.commitTransaction();
    session.endSession();

    res.status(201).send({ user, order });
  } catch (error) {
    // Hata durumunda transaction'ı rollback et
    await session.abortTransaction();
    session.endSession();

    res.status(400).send({ error: 'Transaction başarısız', details: error });
  }
});

module.exports = router;