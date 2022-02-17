const router = require('express').Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
// const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
// router.use('/category',categoryRoutes);

module.exports = router;
