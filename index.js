//THIS COULD BE THE APP.JS

//ALL THE CONST
const router = require('express').Router();
const { append } = require('express/lib/response');

const shoeRoutes = require('./routes/api/shoeRoutes');
const categoryRoutes = require('./routes/api/category');
const productRoutes = require('./routes/api/product');
const userRoutes = require('./routes/api/users');


//Routes wich should handle request
app.use("/user",userRoutes)
app.use("/category", categoryRoutes)
app.use("/product", productRoutes)
app.use("/shoeRoutes", shoeRoutesRoutes)


//error handlers
app.use((req, res, next) => {
    const error = new error ("Not Found");
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })


router.use('/shoes', shoeRoutes);

append.use("")

module.exports = router;