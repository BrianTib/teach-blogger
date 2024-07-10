const router = require('express').Router();

const userRoutes = require('./user');
const postRoutes = require('./post');

router.use('/users', userRoutes);
router.use('/post', postRoutes);

module.exports = router;
