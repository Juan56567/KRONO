const db = require("../db/connector");
const { DataTypes } = require("sequelize");

const extras = db.define(
  "extras",
  {
    empleado: {
      type: DataTypes.INTEGER,
    },
    horas: {
      type: DataTypes.INTEGER,
    },
    ingreso: {
      type: DataTypes.DATE,
    },
    odt: {
      type: DataTypes.INTEGER,
    },
    tipo: {
      type: DataTypes.STRING,
    },
    salida: { type: DataTypes.DATE },
  },
  { tableName: "extras" }
);

module.exports = extras;
