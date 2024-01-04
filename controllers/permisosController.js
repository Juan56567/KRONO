const controller = {};
const timerModel = require("../models/timemodel");
const jwt = require("jsonwebtoken");

controller.permisos = (req, res) => {
  res.render("permisos");
};

controller.offrequest = (req, res) => {
  const inicio = new Date(req.body.inicio);
  const fin = new Date(req.body.fin);
  const observaciones = req.body.observaciones;
  const tipoPer = req.body.tipo;
  const tipo = "permiso";
  const horas = (fin - inicio) / 1000 / 60 / 60;
  const name = jwt.verify(req.cookies.token, process.env.secret).name;

  timerModel.create({
    tipo: tipo,
    usuario: name,
    inicio: inicio,
    fin: fin,
    horas: horas,
    observaciones: observaciones,
    remunerado: tipoPer,
    tipo: tipo,
  });

  console.log(name, inicio, fin, observaciones, tipo, tipoPer, horas);
  res.redirect("/home");
};

module.exports = controller;
