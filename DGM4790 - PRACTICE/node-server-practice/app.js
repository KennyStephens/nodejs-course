const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dev_db_url = 'mongodb+srv://Kenknee:Node-server-practice@product-cluster-ts8li.gcp.mongodb.net/admin';

const product = require('./routes/product.route');

const app = express();

app.use('/products', product);

const port = 5775;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});