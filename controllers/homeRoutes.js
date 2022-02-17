const router = require('express').Router();
const {Product, User} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const productData = await Product.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const products = productData.map((product) => product.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      products,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const product = productData.get({ plain: true });

    res.render('product', {
      ...product,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const dbUserData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Product }],
    });

    const user = dbUserData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


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


