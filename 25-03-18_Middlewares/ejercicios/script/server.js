const express = require('express');
const app = express();
const port = 3000
const homeRouter = require('./routes/homeRouter')
const userRouter = require('./routes/userRouter.js')
const productsRouter = require('./routes/productsRouter.js')
const errorMiddleware = require('./middlewares/errosMiddleware.js');
const notFoundMiddleware = require('./middlewares/notFoundMiddleware.js');

app.use(express.json());

app.use('/home',homeRouter);
app.use('/users',userRouter)
app.use('/products',productsRouter);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

app.listen(port,()=>{
    console.log(`servidor levnatado con exito en http://localhost:${port}`);
})