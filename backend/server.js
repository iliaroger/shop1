const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cartHandlers = require('../backend/routeHandlers/cartHandlers.js');
const productsHandlers = require('../backend/routeHandlers/productsHandlers.js');
require('dotenv').config();

const uri = `mongodb+srv://ilia:${process.env.MONGODB_PASSWORD}@shop1.useg0.mongodb.net/test?authSource=admin&replicaSet=atlas-dwg2jw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;

mongoose.connect(uri, {
  autoIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

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

app.use('/api/products', productsHandlers);

app.use('/api/cart', cartHandlers);

//app.get('/api/cart', getCart);

//app.post('/api/add/cart/:id', cart);

app.listen(port, () => {
  console.log('the server has started');
});
