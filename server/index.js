const express = require('express')
const cors = require('cors')

const app = express()

let cart = []

app.use(express.json());
app.use(cors());

app.put('/set-cart', (req, res) => {
    cart = req.body.cart
    res.json(cart)
})

app.get('/get-cart', (req, res) => {
    res.json(cart)
})

app.listen(3001, () => {console.log('http://localhost:3001')})