const express = require('express');
const app = express();

// req => middleware => res

app.get('/', (req, res) => {
  res.send('Home');
});

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
