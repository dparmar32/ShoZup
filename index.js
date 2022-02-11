const router = require('express').Router();
const shoeRoutes = require('./api');

router.use('/shoes', shoeRoutes);

module.exports = router;