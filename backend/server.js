const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const {
  productsHandler,
  productHandler,
  getCart,
} = require('./routeHandlers/getHandlers.js');

const { cart } = require('../backend/routeHandlers/postHandlers.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('server is operating');
});

app.get('/api/products', productsHandler);

app.get('/api/product/:id', productHandler);

app.post('/api/add/cart/:id', cart);

app.get('/api/cart', getCart);

app.listen(port, () => {
  console.log('the server has started');
});
