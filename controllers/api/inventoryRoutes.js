const router = require('express').Router();
const { Inventory } = require('../../models');
//const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        ///what paremeters are you passing? I need to add brand shoe size and description
      const newInventory = await Inventory.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newInventory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
