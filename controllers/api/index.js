const router = require('express').Router();

const userRoutes = require('./user');
const postRoutes = require('./post');
const commentsRoutes = require('./comments');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes);

module.exports = router;
