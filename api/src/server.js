const express = require('express');

const { connectDatabase } = require('./database');

connectDatabase();

const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log('Listening at localhost:4000...');
});

module.exports = app;