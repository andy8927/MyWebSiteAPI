var express = require('express');
var router = express.Router();

router.get('/A', (req, res, next) => {
	res.send('This is Marketing A!!')
})

router.get('/B', (req, res, next) => {
	res.send('This is Marketing B!!')
})

router.get('/C', (req, res, next) => {
	res.send('This is Marketing C!!')
})

router.get('/D', (req, res, next) => {
	res.send('This is Marketing D!!')
})

module.exports = router;
