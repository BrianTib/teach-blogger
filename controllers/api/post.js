const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    console.log("GOT HERE");

    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const newPost = await Post.create({
            ...req.body,
            author: req.session.user_id,
        });

        res.status(200).json(newPost);
    } catch (err) {
        console.log("Error", err);
        res.status(400).json(err);
    }
});

module.exports = router;