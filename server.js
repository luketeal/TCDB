const express = require('express');
const path = require('path');

const sequelize = require('./config/connection');

// Heroku 
const PORT = process.env.PORT || 3000;

// express returns an Object
const app = express(); // instance = Object

// Setup our server

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes(app);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  });