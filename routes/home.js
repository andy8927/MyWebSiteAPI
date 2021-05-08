var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', (req, res, next) => {
    console.log('Home')
	res.send('This is Home')
})

module.exports = router;
