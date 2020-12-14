const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Cart = require('../model/cartModel.js');
const Products = require('../model/productsModel.js');

const cartRouter = express.Router();

cartRouter.post(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    try {
      const findProduct = await Products.findById(productId);
      if (findProduct._id != productId) {
        const cartDetails = {
          productName: findProduct.productName,
          productPrice: findProduct.productPrice,
          productQuantity: 1,
        };
        await Cart.insertMany(cartDetails);
      } else {
        const cartProduct = await Cart.find({
          productName: findProduct.productName,
        });
        const cartDetails = {
          productName: cartProduct[0].productName,
          productPrice: cartProduct[0].productPrice,
          productQuantity: cartProduct[0].productQuantity + 1,
        };
        await Cart.updateOne({ _id: cartProduct[0]._id }, cartDetails);
      }
    } catch (err) {
      if (err) throw err;
    }
  })
);

cartRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const cartData = await Cart.find({});
      if (!cartData) {
        return res.send('No products in cart');
      }
      res.send(cartData);
    } catch (err) {
      if (err) throw err;
    }
  })
);

module.exports = cartRouter;
