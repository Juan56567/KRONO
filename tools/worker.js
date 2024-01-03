const controller = {};
const jwt = require("jsonwebtoken");

controller.verify = (req, res, next) => {
  const token = req.cookies.token;
  try {
    jwt.verify(token, process.env.secret);
  } catch (error) {
    res.redirect("/");
  }
  next();
};

controller.roles = (req, res, next) => {
  const token = jwt.verify(req.cookies.token, process.env.secret);
  const rol = token.rol;
  console.log(rol);
  if (rol == "basic") {
    res.redirect("/home");
  } else {
    next();
  }
};

module.exports = controller;
