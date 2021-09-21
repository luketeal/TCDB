const express = require('express')
const path = require('path')
const apiRoutes = require('./routes/apiRoutes')
const sequelize = require('./config/connection')

// for Heroku 
const PORT = process.env.PORT || 3000

// express returns an Object
const app = express() 

// Setup our server

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// use api routes
apiRoutes(app)

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
  })