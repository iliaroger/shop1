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

// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'YOUR-DOMAIN.TLD'); // update to match the domain you will make the request from
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

app.get('/', (req, res) => {
  res.send('server is operating');
});

app.get('/api/products', productsHandler);

app.get('/api/product/:id', productHandler);

app.get('/api/cart', getCart);

app.post('/api/add/cart/:id', cart);

app.listen(port, () => {
  console.log('the server has started');
});
