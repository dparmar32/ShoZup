const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProduct = await Product.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!productData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// // do all four get post delete and update
//
// //get all Product
// router.get('/', async (req, res) => {
//   try {
//     const productData = await Product.findAll();
//     res.status(200).json(productData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
//
// // GET a single Product
// router.get('/:id', (req, res) => {
//   //    Find a single shoe by its primary key (shoe_id)
//      Product.findByPk(req.params.id).then((productData) => {
//        res.json(productData);
//      });
//   });

module.exports = router;
