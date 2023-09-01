const express = require('express');
const app = express();

// req => middleware => res

app.get('/', (req, res) => {
  res.send('<h1>Home</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About</h1>');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
