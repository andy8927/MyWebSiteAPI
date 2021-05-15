var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('This is Index Page')
})

router.get('/user', (req, res, next) => {
	res.send('This is User Page')
})

module.exports = router;
