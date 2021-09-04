// import modules
require('dotenv').config();
const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const cookieParser = require('cookie-parser');
const productRouter = require('./routes/product');
const uploadRouter = require('./routes/uploadImage');
const userRouter = require('./routes/user');
const marketingRouter = require('./routes/marketing');


// middelware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));

/* GET home page. */
app.get('/', (req, res, next) => {
  console.log('Hello NodeJs')
  res.redirect('/index.html')
})


// route setting
app.use('/uploadImage', uploadRouter);
app.use('/marking', marketingRouter);
app.use('/prouct', productRouter);
app.use('/user', userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  console.log(err);
  
  const errorMessage = `
  Something went wrong!!
  ${err.message}
  `
  res.send(errorMessage)
});

// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})