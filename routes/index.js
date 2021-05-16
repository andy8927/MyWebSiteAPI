var express = require('express');
var router = express.Router();

router.get('/', handleIndex)
router.get('/user', handleIndexUser)


function handleIndex(req, res, next){
    res.send("This is Index Page")
}

function handleIndexUser(req, res, next){
    res.send("This is Index User Page")
}

module.exports = router;
