// import modules
const express = require('express')
const app = express()
const port = 3001
const cookieParser = require('cookie-parser')
const indexRouter = require('./routes/index')

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())

// route setting
app.use('/index',indexRouter)

// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})