const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  productPrice: { type: Number, required: true },
  productQuantity: { type: Number, required: true },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
