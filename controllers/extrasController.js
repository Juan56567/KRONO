const controller = {};
const users = require("../models/userModel");
const extras = require("../models/timemodel");
const holidays = require("date-holidays");
const Holidays = new holidays();
const currentDate = new Date();
const year = currentDate.getFullYear();

controller.viewExtras = async (req, res) => {
  const getUsers = await users.findAll({ attributes: ["id", "name"] });
  res.render("extras", { getUsers });
};

controller.uploadExtras = (req, res) => {
  console.log(req.body);
  const dateI = new Date(req.body.dateI);
  const dateF = new Date(req.body.dateF);
  const colabs = req.body.colab;
  const horas = (dateF - dateI) / 1000 / 60 / 60;
  const odt = req.body.odt;
  const listHoliday = Holidays.ge;
  console.log(listHoliday);

  if (dateI in listHoliday) {
    console.log("festivo so");
  }

  const create = async (colabs) => {
    for (const colab of colabs) {
      await extras.create({
        empleado: colab,
        horas: horas,
        ingreso: dateI,
        salida: dateF,
        odt: odt,
      });
    }
  };

  if (Array.isArray(colabs)) {
    create(colabs);
  } else {
    const temp = [];
    temp.push(colabs);
    create(temp);
  }

  res.redirect("/");
};

module.exports = controller;
