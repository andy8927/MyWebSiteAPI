// import modules
const express = require('express')
const app = express()
const port = 3000

const indexRouter = require('./routes/index');


// route setting
app.use('/index', indexRouter);

// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})