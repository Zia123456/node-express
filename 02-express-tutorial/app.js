const express = require('express');
const app = express();
const { products } = require('./data');
const { people } = require('./data');

app.get('/', (req, res) => {
  res.json(products);
});

app.get('/people', (req, res) => {
  res.json(people);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
