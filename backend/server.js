import express from 'express'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config()


connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/ordersss', orderRoutes)
app.use(notFound) 
    

app.use(errorHandler)

///app.get('/api/products', (req, res) => {
    ///res.json(products)
//})

//app.get('/api/products/:id', (req, res) => {
    //const product = products.find(p => p._id === req.params.id)
    //res.json(product)
//})

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log (`server running in ${process.env.NODE_ENV} mode on port ${PORT}`))