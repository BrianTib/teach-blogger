const router = require('express').Router();
const { User, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;