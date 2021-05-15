// import modules
const express = require('express')
const app = express()
const port = 3000
const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');

// route setting
app.use('/', indexRouter);
app.use('/', homeRouter);

console.log("Hello NodeJs")
console.log("Hello World")

// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})