var express = require('express');
var router = express.Router();

router.get('/home', (req, res, next) => {
    console.log('Home')
	res.send('This is Product')
})

module.exports = router;
