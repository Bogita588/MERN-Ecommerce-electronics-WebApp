const router = require('express').Router();
const User = require('../models/User');

// Registration process
router.post("/register", async (req, res) => {
  const newUser = new User ({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    // Handle the error and respond with an error message or status code.
    res.status(500).json({ error: "An error occurred while registering the user." });
  }
});

module.exports = router;
