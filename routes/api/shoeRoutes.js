const router = require('express').Router();
const Shoe = require('../../models/Shoe');

// GET all books
router.get('/', (req, res) => {
    // Get all shoes from the shoe table
    Shoe.findAll().then(shoeData) => {
      res.json(shoeData);
    });
  });
  
  // GET a single book
  router.get('/:id', (req, res) => {
    // Find a single shoe by its primary key (shoe_id)
    Book.findByPk(req.params.id).then((shoeData) => {
      res.json(shoeData);
    });
  });

  module.exports = router;