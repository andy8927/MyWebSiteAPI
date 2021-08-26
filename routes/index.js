var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log('Hello NodeJs 2021-08-26')
    res.send('Hello NodeJs 2021-08-26')
})

module.exports = router;
