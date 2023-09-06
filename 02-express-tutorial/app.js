const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res
app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('<h1>Welcome to home page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>Welcome to about page</h1>');
});

app.get('/api/products', (req, res) => {
  res.send('<h1>Products</h1>');
});

app.get('/api/items', [logger, authorize], (req, res) => {
  res.send('<h1>Items</h1>');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
