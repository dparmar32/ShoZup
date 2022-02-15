/* The router.use() method is used to register a middleware function with an Express application.
The middleware function is executed for every request that is handled by the application.
The middleware function is used to register routes with the router. */
const router = require('express').Router();
const categoryRoutes = require('./category');
const productRoutes = require('./product');




/* The router.use() method is used to register a route.

The first argument is the path of the route.

The second argument is the route handler.

The route handler is a function that returns a response to the request. */

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);

const users = required('./users')


module.exports = router;