var express = require('express');
var createWrap = require('./json-wrap');
var getFIbonacciByIndex = require('./fibonacci');
var app = express();
// делаем заприо по адресу
app.get('/sum-of-two-numbers', function (req, res) {
    var wrap = createWrap(res);
    var first = Number(req.query.first);
    var second = Number(req.query.second);
    wrap(first + second);
});
app.get('/get-fibonacci', function (req, res)
{
    console.log(req.query.index)
    var wrap = createWrap(res);
    var index = Number(req.query.index);
    var result = getFIbonacciByIndex(index);
    wrap(result);
});
app.listen(3001);
