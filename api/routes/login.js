const express = require("express");
const router = express.Router();
const jwt = require("./token");
const { token } = require("morgan");

const user = {
  id: 1,
  username: "johnDoe",
  password: "password",
};

router.post("/", (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    const token = jwt.generateToken(user);
    res.status(200).json({
      success: true,
      message: "This is the login method",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Unauthorized. Invalid username and password. ",
    });
  }
});

module.exports = router;
