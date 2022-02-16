const router = require('express').Router();
const { Category, Product } = require('../models');

// GET all categories for homepage
// router.get('/', async (req, res) => {
//   try {
//     const dbCategoryData = await Category.findAll({
//         TODO:
//     //   include: [
//     //     {
//     //       model: Product,
//     //       attributes: ['filename', 'description'],
//     //     },
//     //   ],
//     });

//     const categories = dbCategoryData.map((category) =>
//       category.get({ plain: true })
//     );
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('homepage', {
//       categories,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one category
// router.get('/category/:id', async (req, res) => {
//   try {
//     const dbCategoryData = await Category.findByPk(req.params.id, {
//       include: [
//         {
//           model: Product,
//           attributes: [
//             'id',
//             'product_name',
//             'price',
//           ],
//         },
//       ],
//     });

//     const category = dbCategoryData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'category' template
//     res.render('category', { category, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET one product
// router.get('/product/:id', async (req, res) => {
//   try {
//     const dbProductData = await Product.findByPk(req.params.id);

//     const product = dbProductData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('product', { product, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;


