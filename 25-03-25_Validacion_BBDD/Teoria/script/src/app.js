const express = require("express");
const homeRouter = require("./routes/homeRouter.js");
const userRouter = require("./routes/userRouter.js");
const productsRouter = require("./routes/productsRouter.js");
const errorMiddleware = require("./middlewares/errosMiddleware.js");
const notFoundMiddleware = require("./middlewares/notFoundMiddleware.js");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
//limite de peticiones
const rateLimit = require("express-rate-limit");
//proteccion de consultas
const sanitize = require("express-mongo-sanitize");

app.use(express.json());
app.use(cors());
app.use(helmet());
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Demasiadas peticiones para esta ip",
});
app.use('/',apiLimiter)
app.use(sanitize());

app.use("/home", homeRouter);
app.use("/users", userRouter);
app.use("/products", productsRouter);
app.use(errorMiddleware);
app.use(notFoundMiddleware);

module.exports = app;
