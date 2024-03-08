var express = require('express')
var router = express.Router()

const path = require('path')

const basePath = path.join(__dirname, '../templates')

router.get('/form', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

router.get('/tesouro', (req, res) => {
  res.sendFile(`${basePath}/tesouro.html`)
})




module.exports = router