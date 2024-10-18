const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { generateToken } = require("./token");
const secretKey = generateToken.secretKey;
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

router.get("/", authenticateToken, (req, res) => {
  console.log(req.headers);
  res.status(200).json({ message: "This is a sample page for auth" });
});

module.exports = router;
