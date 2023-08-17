const express = require('express')

const stores = [
  {
    id: 1,
    name: {
      name: 'Tienda 1',
      description: 'esta es la tienda 1'
    },
    products: [
      {
        id: 1,
        item_name: 'cookies',
        price: 4
      },
      {
        id: 2,
        item_name: 'agua',
        price: 23
      },
      {
        id: 3,
        item_name: 'galletas',
        price: 32
      }
    ]
  },
  {
    id: 2,
    name: {
      name: 'Tienda 2',
      description: 'esta es la tienda 2'
    },
    products: [
      {
        id: 1,
        item_name: 'soda ',
        price: 43
      },
      {
        id: 2,
        item_name: 'caramelos',
        price: 53
      },
      {
        id: 3,
        item_name: 'chocolate',
        price: 43
      }
    ]
  }
]
const app = express()
const port = 3000

app.get('/stores', (req, res) => {
  res.json(stores)
})

app.get('/', (req, res) => {
  res.send('Hello World! this is my first nodejs app')
})

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product 1',
      description: 'this is a product',
      price: 100
    },
    {
      name: 'product 2',
      description: 'this is a product',
      price: 200
    }
  ])
})

app.get('/products/:id', (req, res) => {
  const { id } = req.params
  res.json({
    id,
    name: 'product 1',
    description: 'this is a product',
    price: 100
  })
})

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params
  res.json([
    {
      categoryId,
      productId
    },
    {
      categoryId,
      productId
    }
  ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
