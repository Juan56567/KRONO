const db = require("../models/timemodel");
const controller = {};

controller.start = async (req, res) => {
  const fecha = new Date();
  const month = fecha.getMonth() + 1;
  const year = fecha.getFullYear();
  res.render("report", { month, year });

  //   const extras = await db.findAll({
  //     where:{

  //     }
  //   })
};

module.exports = controller;
