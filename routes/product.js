var express = require('express');
var router = express.Router();
var { execute_sql } = require('../database/mysql')


router.get('/connectDB', async (req, res, next) => {
    // const sql = 'SELECT * FROM product;'
    const sql = "INSERT into product (title, description, price) VALUES ('煞氣誒', '123eee', 233);"
    const result = await execute_sql(sql, '')
    const proudct_id = result.insertId
    console.log(proudct_id)
    res.send(' DB Test')
})


module.exports = router;
