const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Products = require('../model/productsModel.js');

const productRouter = express.Router();

productRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const params = req.params.id;
    try {
      const detailedProduct = await Products.findById(params);
      if (!detailedProduct) {
        res.status(404).send('Product not found');
      }
      res.send(detailedProduct);
    } catch (err) {
      if (err) throw err;
    }
  })
);

// seed product data
productRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    await Products.deleteMany({});
    const productsResponse = await Products.insertMany(products.products);
    res.send(productsResponse);
  })
);

productRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    try {
      const productsData = await Products.find();
      res.send(productsData);
    } catch (err) {
      if (err) throw err;
    }
  })
);

module.exports = productRouter;
