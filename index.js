const express = require('express')

const store = {
  products: [
    {
      id: 1,
      name: 'product 1',
      description: 'this is a product1',
      price: 100,
      category: 'category 1'
    },
    {
      id: 2,
      name: 'product 2',
      description: 'this is a product2',
      price: 200,
      category: 'category 2'
    },
    {
      id: 3,
      name: 'product 3',
      description: 'this is a product3',
      price: 300,
      category: 'category 1'
    },
    {
      id: 4,
      name: 'product 4',
      description: 'this is a product4',
      price: 400,
      category: 'category 2'
    }
  ]
}

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! this is my first nodejs app')
})

// muestra todos los productos
app.get('/products', (req, res) => {
  res.json(store.products)
})

// get all categories
app.get('/products/categories', (req, res) => {
  const categoriesSet = new Set(store.products.map((product) => product.category))
  const uniqueCategories = Array.from(categoriesSet)
  res.json(uniqueCategories)
})

// busqueda por id
app.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = store.products.find((product) => product.id === Number(id))
  res.json(product)
})

// busqueda por categoria
app.get('/products/category/:category', (req, res) => {
  const { category } = req.params
  const products = store.products.filter(
    (product) => product.category === category
  )
  res.json(products)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
