const db = require("../db/connector");
const { DataTypes, STRING } = require("sequelize");

const timer = db.define(
  "timer",
  {
    tipo: { type: DataTypes.STRING },
    usuario: { type: DataTypes.STRING },
    inicio: { type: Date },
    fin: { type: Date },
    horas: { type: Date },
    remunerado: { type: DataTypes.STRING },
    observaciones: { type: DataTypes.STRING },
    odt: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING },
    tipoExtra: { type: DataTypes.STRING },
  },
  { tableName: "timer" }
);

module.exports = timer;
