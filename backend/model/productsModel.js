const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  productRelease: { type: String, required: true },
  productPrice: { type: Number, required: true },
  productUrl: { type: String, required: true },
  productDescription: { type: String, required: true },
});

const Products = mongoose.model('Products', productsSchema);

module.exports = Products;
