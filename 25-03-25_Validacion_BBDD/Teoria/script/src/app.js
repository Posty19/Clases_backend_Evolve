const express = require('express');
const homeRouter = require('./routes/homeRouter.js')
const userRouter = require('./routes/userRouter.js')
const productsRouter = require('./routes/productsRouter.js')
const errorMiddleware = require('./middlewares/errosMiddleware.js');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware.js');
const app = express();


app.use(express.json());

app.use('/home',homeRouter);
app.use('/users',userRouter)
app.use('/products',productsRouter);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

module.exports = app;