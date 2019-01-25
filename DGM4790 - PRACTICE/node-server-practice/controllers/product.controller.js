const Product = require('../models/product.model');

exports.test = (req, res, next) => {
  res.send('Greetings from the test controller');
};