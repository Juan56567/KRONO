const controller = {};

controller.start = (req, res) => {
  res.render("home");
  const fecha = new Date();
  const mes = fecha.getMonth() + 1;
};

controller.logout = (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
};

module.exports = controller;
