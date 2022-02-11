const router = require('express').Router();
const shoes = require('./shoeRoutes');

router.use('/shoes', userRoutes);

module.exports = router;