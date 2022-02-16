const router = require('express').Router();
const userRoutes = require('./user-routes');
// const projectRoutes = require('./projectRoutes');
// const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);
// router.use('/category',categoryRoutes);

module.exports = router;
