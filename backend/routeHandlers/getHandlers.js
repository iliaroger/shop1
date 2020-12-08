const fs = require('fs');
const path = require('path');
const productData = require('../data/productsData.js');

const productsHandler = (req, res) => {
  try {
    res.send(productData.products);
  } catch (err) {
    res.send('Error message: ' + err);
  }
};

const productHandler = (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const matchedProduct = productData.products.filter(
      (el) => el.productId === productId
    );
    if (matchedProduct) {
      res.send(matchedProduct);
    }
  } catch (err) {
    res.statusCode(404);
    res.send(err.message);
  }
};

const cartHandler = (req, res) => {
  try {
    const cartData = fs.readFileSync(
      path.join(__dirname, '../data/cardData.json')
    );
    const processedData = JSON.parse(cartData);
    res.send('DIODJIOADDI');
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  productsHandler: productsHandler,
  productHandler: productHandler,
  getCart: cartHandler,
};
