const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

/* It's a GET request to the homepage. It's using the `async` keyword to make sure that the code is
executed asynchronously. */
router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const projectData = await Project.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const projects = projectData.map((project) => project.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      projects,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* This is a GET request to the project page. It's using the `async` keyword to make sure that the code
is
executed asynchronously. */
router.get('/project/:id', async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

/* This is a method that is available on the Sequelize model. It's a shortcut for
`projectData.toJSON()`. */
    const project = projectData.get({ plain: true });

/* This is a way to pass data into the template. It's using the `res.render()` method to render
the `project.ejs` template. The `project` variable is the data that we want to pass into the
template. The `logged_in` variable is a boolean that tells the template whether or not the user is
logged in. */
    res.render('project', {
      ...project,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
/* The `withAuth` middleware is a function that takes in a request and a response. It's a
middleware that is used to check if the user is logged in. If the user is logged in, the request
will be passed through to the next middleware. If the user is not logged in, the request will be
redirected to the login page. */
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

  /* This is a way to pass data into the template. It's using the `res.render()` method to render
  the `profile.ejs` template. The `user` variable is the data that we want to pass into the
  template. The `logged_in` variable is a boolean that tells the template whether or not the user is
  logged in. */
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* This is a GET request to the login page. It's using the `async` keyword to make sure that the code
is
executed asynchronously. */
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
