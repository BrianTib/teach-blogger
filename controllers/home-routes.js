const router = require('express').Router();
const { User, Post, Comment } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postsData = await Post.findAll({
      include: [{ model: User }],
    });

    const posts = postsData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

router.get('/dashboard', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  try {
    const postsData = await Post.findAll({
      where: { author: req.session.user_id }
    });

    const posts = postsData.map((post) => post.get({ plain: true }));

    res.render('dashboard', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-post', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('new-post', { logged_in: req.session.logged_in });
});

router.get('/edit-post/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  }

  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });

    if (post.author !== req.session.user_id) {
      res.status(403).json({ message: 'You are not authorized to edit this post' });
      return;
    }

    res.render('edit-post', { post, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/posts/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: User }, { model: Comment, include: [{ model: User }] }],
    });

    const post = postData.get({ plain: true });

    res.render('posts', { post, logged_in: req.session.logged_in });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;