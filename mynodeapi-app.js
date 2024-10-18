const express = require('express')
const app = express();
const morgan = require('morgan');      //logging in node js

const productRoutes = require('./api/routes/products');
const orderRoutes = require("./api/routes/orders");

app.use(morgan('dev'));

app.use((req,res,next)=>{
   const error = new Error("Not found");
   error.status = 404;
   next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500).json({
        message:error.message
    })
})

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

module.exports = app;