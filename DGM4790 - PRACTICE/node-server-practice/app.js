const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const dev_db_url = 'mongodb+srv://Kenknee:Node-server-practice@product-cluster-ts8li.gcp.mongodb.net/product';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const product = require('./routes/product.route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', product);

const port = 5775;

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});