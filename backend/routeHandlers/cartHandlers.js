const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Cart = require('../model/cartModel.js');
const Products = require('../model/productsModel.js');
const { authTokens } = require('../routeHandlers/authHandlers.js');

const cartRouter = express.Router();

cartRouter.post(
  '/remove/:id',
  expressAsyncHandler(async (req, res) => {
    const itemId = req.params.id;
    try {
      await Cart.findOneAndRemove({ _id: itemId });
      res.status(200).send('Item was removed');
    } catch (err) {
      res.status(500).send('Could not remove the item: ' + err);
    }
  })
);

cartRouter.post(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    try {
      const findProduct = await Products.findById(productId);
      const productExists = await Cart.exists({
        productName: findProduct.productName,
      });
      if (!productExists) {
        const cartDetails = {
          productName: findProduct.productName,
          productPrice: findProduct.productPrice,
          productQuantity: 1,
        };
        await Cart.insertMany(cartDetails);
      } else {
        const findCartProduct = await Cart.find({
          productName: findProduct.productName,
        });
        await Cart.findOneAndUpdate(
          { productName: findProduct.productName },
          { $set: { productQuantity: findCartProduct[0].productQuantity + 1 } },
          {
            new: true,
          }
        );
      }
    } catch (err) {
      if (err) throw err;
    }
  })
);

cartRouter.get(
  '/',
  authTokens,
  expressAsyncHandler(async (req, res) => {
    const { auth, message } = res.locals.status;
    if (!auth) {
      res.send({
        auth: false,
        message: message,
        data: [],
      });
    } else {
      try {
        const cartData = await Cart.find({});
        if (!cartData) {
          res.send({
            auth: true,
            message: message,
            data: [],
          });
        }
        res.send({
          auth: true,
          message: message,
          data: cartData,
        });
      } catch (err) {
        if (err) throw err;
      }
    }
  })
);

module.exports = cartRouter;
