const express = require('express');
const app = express();
const port = 3000;
const homeRouter = require('.routes/homeRoutes')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes')

app.use(express.json());

//HOME
app.use('/home',homeRouter);

//USER
app.use('/user',userRoutes)


//PRODUCTS
app.use('/products',productRoutes);


app.listen(port,()=>{
    console.log(`servidor levnatado con exito en http://localhost:${port}`);
})