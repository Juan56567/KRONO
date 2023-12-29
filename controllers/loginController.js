const controller = {};
const userModel = require("../models/userModel");

controller.loginLoad = (req, res) => {
  res.render("login");
};

controller.auth = async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  const query = await userModel.findOne({ where: { user: user } });

  if (query == null) {
    res.redirect("/");
  } else {
    const queryPass = query.dataValues.password;
    if (queryPass == password) {
      res.redirect("/home");
    } else {
      res.redirect("/");
    }
  }
};

module.exports = controller;
