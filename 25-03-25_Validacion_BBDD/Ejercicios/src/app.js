const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const veryfyToken = require('./middlewares/authMiddleware')
const errorHandler = require('./middlewares/errorMiddleware');
const notFoundHandler = require('./middlewares/notFoundHandler');
const cors = require('cors');
const helmet = require('helmet');
// Protección con límite de peticiones por IP
const rateLimit = require('express-rate-limit');
// Protección contra consultas NoSQL maliciosas (inyección)
const mongoSanitize = require('express-mongo-sanitize');

const cookieParser = require('cookie-parser');
app.use(cookieParser('tu_secreto_jwt'));

const app = express();

// Middleware para parsear JSON
app.use(express.json());// Devuelve un middleware

// Evitar conflictos CORS
app.use(cors()); 

// Protección en cabeceras y otros
app.use(helmet());

// Protección contra consulta maliciosas
app.use(mongoSanitize());

const apiLimiter = rateLimit({ // ESTO SE LLAMA LIMITADOR 
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // 100 peticiones por IP
    message: 'Demasiadas peticiones desde esta IP'
});

//Toda mi API queda protegida de peticiones recurrentes excesivas
app.use('/', apiLimiter);
  
// Montamos las rutas en diferentes paths base
app.use('/auth',authRoutes)
app.use('/users', veryfyToken, userRoutes);// verify token se puede poner tambien en las rutas
app.use('/products', productRoutes); 

// Manejador de rutas no encontradas
app.use(notFoundHandler);

app.use(errorHandler);

module.exports = app;