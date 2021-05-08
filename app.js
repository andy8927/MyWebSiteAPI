// import modules
const express = require('express')
const app = express()
const port = 3000

// route setting
app.get('/', (req, res) => {
    console.log('hello')
  res.send('Hello NodeJs')
})

// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})