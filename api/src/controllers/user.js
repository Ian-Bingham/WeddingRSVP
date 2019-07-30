const { Router } = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');

const router = Router();

// Create User
router.post('/create', [ check(['email', 'hasPlusOne']).exists() ], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { email, hasPlusOne } = req.body;

  try {
    const user = await User.findOne({ email })

    if(!user) {
      const user = new User({
        email: email,
        isGoing: false,
        foodAllergies: '',
        hasPlusOne: hasPlusOne
      })

      await user.save();
      return res.send(user);
    }
    else {
      return res.status(400).send({ error: 'User already exsists' })
    }
  } catch(err) {
    return res.sendStatus(500);
  }

});

// Get User
router.post('/get', [ check(['email']).exists() ], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { email } = req.body;

  const user = await User.findOne({ email });

  if(user) {
    return res.send(user);
  } else {
    return res.status(401).send({error: 'Unauthorized'});
  }

});

// Update User
router.patch('/', [ check(['email']).exists() ], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).send({ errors: errors.array() });
  }

  const { email } = req.body

  try {
    const user = await User.findOne({ email })

    if(user) {
      user.set(req.body)

      await user.save();
      return res.send(user);
    }
    else {
      return res.sendStatus(404)
    }
  } catch(err) {
    return res.sendStatus(500);
  }

});

module.exports = router