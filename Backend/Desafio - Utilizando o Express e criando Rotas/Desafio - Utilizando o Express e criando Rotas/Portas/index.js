const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

const users = require('./users')


// ler o body
app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())
app.use(express.static('public'))

var checkAuth = function (req, res, next) {
  req.authStatus = true

  if (req.authStatus) {
    console.log('A aventura te aguarda!')
    next()
  }
}

app.use(checkAuth)

app.use('/users', users)


app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})




// app.use(express.static(path.join(__dirname, '/Portas/img/posTimeSkip.jpe')));

// // Rota para exibir a imagem
// app.get('/posTimeSkip.jpe', (req, res) => {
//     res.sendFile(path.join(__dirname, '/posTimeSkip.jpe'));
// });

// app.listen(port, () => {
//     console.log(`Servidor rodando em http://localhost:${port}`);
// });