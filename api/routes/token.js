const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  const secretKey = "qwert";
  const options = {
    expiresIn: "1h",
  };
  const token = jwt.sign(payload, secretKey, options);
  return token, options.expiresIn;
};

module.exports = { generateToken };
