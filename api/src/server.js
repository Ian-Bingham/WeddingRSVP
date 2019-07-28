const express = require('express');

const { connectDatabase } = require('./database');
const UserController = require('./controllers/user');

connectDatabase();

const app = express();
app.use(express.json());

app.use('/user', UserController);

app.listen(4000, () => {
  console.log('Listening at localhost:4000...');
});

module.exports = app;