const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! this is my first nodejs app')
})

app.get('/hola', (req, res) => {
  res.send('hola soy un endpoint de prueba')
})

app.get('/products', (req, res) => {
  res.json({
    name: 'product 1',
    price: 1000,
    description: 'this is a product'
  })
})

app.get('/categories', (req, res) => {
  res.json([
    {
      name: 'category 1',
      description: 'this is a category'
    },
    {
      name: 'category 2',
      description: 'this is a category'
    },
    {
      name: 'category 3',
      description: 'this is a category'
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
