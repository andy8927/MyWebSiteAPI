var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log('Hello NodeJs')
    res.send('Hello NodeJs')
})

module.exports = router;
