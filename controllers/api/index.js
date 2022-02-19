const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const inventoryRoutes = require ('./inventoryRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/inventory',inventoryRoutes);

module.exports = router;
