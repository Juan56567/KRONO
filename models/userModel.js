const db = require("../db/connector");
const { DataTypes, col } = require("sequelize");

const personal = db.define(
  "personal",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    user: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    rol: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "personal",
  }
);

module.exports = personal;
