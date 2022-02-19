const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const inventoryRoutes = require('./api/inventoryRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test',inventoryRoutes);

module.exports = router;