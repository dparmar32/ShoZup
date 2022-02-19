const router = require('express').Router();
const { Inventory } = require('../../models');
//const withAuth = require('../../utils/auth');

router.post('/', (req, res) => {
    console.log('request');
   // console.log(req);
        ///what paremeters are you passing? I need to add brand shoe size and description
      Inventory.create({
      //   // ...req.body,
        brand: req.body.brand,
        size: req.body.size,
        description: req.body.description,
      })
      .then(data => {
        console.log(data);
        res.status(200).json(data);
      })  
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      })
  });

module.exports = router;
