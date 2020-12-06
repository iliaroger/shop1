const express = require('express');
const app = express();
const data = require('../frontend/src/data/productsData.js');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('server is operating');
});

app.get('/api/products', (req, res) => {
  try {
    res.send(data.products);
  } catch (err) {
    res.send('Error message: ' + err);
  }
});

app.get('/api/product/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  try {
    const matchedProduct = data.products.filter(
      (el) => el.productId === productId
    );
    if (matchedProduct) {
      res.send(matchedProduct);
    }
  } catch (err) {
    res.statusCode(404);
    res.send(err.message);
  }
});

app.listen(port, () => {
  console.log('the server has started');
});
