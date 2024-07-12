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

router.put('/:id', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }

    try {
        const [affectedRows] = await Post.update(req.body, {
            where: { id: req.params.id },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;