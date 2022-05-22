const e = require("express");
const users = require("../users.json");

module.exports = function (req, res, next) {
  const findUser = users.find((item) => item.username === req.query.username);
  if (findUser !== undefined) {
    next();
  } else {
    res.status(401).send("Bad login");
  }
};
