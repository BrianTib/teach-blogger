const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/:post_id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const newComment = await Comment.create({
            ...req.body,
            post_id: req.params.post_id,
            author: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;