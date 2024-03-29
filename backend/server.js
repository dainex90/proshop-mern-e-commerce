import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'

dotenv.config();

connectDB();

const app = express();

// middleware
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'API is Running ..'
    });
})
app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));