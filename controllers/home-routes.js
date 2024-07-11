const router = require('express').Router();
const { User, Post } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  res.render('homepage');
  // try {
  //   const dbGalleryData = await Gallery.findAll({
  //     include: [
  //       {
  //         model: Painting,
  //         attributes: ['filename', 'description'],
  //       },
  //     ],
  //   });

  //   const galleries = dbGalleryData.map((gallery) =>
  //     gallery.get({ plain: true })
  //   );
  //   res.render('homepage', {
  //     galleries,
  //     loggedIn: req.session.loggedIn,
  //   });
  // } catch (err) {
  //   console.log(err);
  //   res.status(500).json(err);
  // }
});

module.exports = router;