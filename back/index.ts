const express = require('express')

const createWrap = require('./json-wrap')
const getFIbonacciByIndex = require('./fibonacci')

const app = express()

// делаем заприо по адресу
app.get('/sum-of-two-numbers', function (req, res) {
  const wrap = createWrap(res)
  const first = Number(req.query.first)
  const second = Number(req.query.second)

  wrap(first + second)
})

app.get('/get-fibonacci', function (req, res) {
  const wrap = createWrap(res)
  const index = Number(req.query.index)
  const result = getFIbonacciByIndex(index)

  wrap(result)
})
app.listen(3001)