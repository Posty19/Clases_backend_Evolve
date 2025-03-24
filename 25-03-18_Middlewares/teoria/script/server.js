const express = require('express');
const app = express();
const apiRouter = require('.routes/apiRoutes.js')
const port = 3000

app.use(express.json());

//definir enrutadores
app.use('/api',apiRouter);

//middleware manejador ruta no encontrada
app.use((request,response)=>{
    response.status(404).json({success:'nok',message:'recurso no encontrado'})
})
//middleware manejador errores
app.use((error,request,response,next)=>{
    response.status(500).json({success:'nok',message:'recurso no encontrado'})
})


app.listen(port,()=>{
    console.log(`servidor levnatado con exito en http://localhost:${port}`);
})