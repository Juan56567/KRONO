const express = require("express");
const router = express.Router();
//controladores
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");
const extrasController = require("../controllers/extrasController");
const reportController = require("../controllers/reportController");
const newEmployeeController = require("../controllers/newEmployee");
const permisosController = require("../controllers/permisosController");
const worker = require("../tools/worker");

//rutas
router.get("/", loginController.loginLoad);
router.post("/auth", loginController.auth);
router.get("/home", worker.verify, homeController.start);
router.get("/logout", homeController.logout);
router.get(
  "/createEmployee",
  worker.verify,
  worker.roles,
  newEmployeeController.createEmployeeView
);
router.post(
  "/createEmployee",
  worker.verify,
  newEmployeeController.createEmployee
);
router.get("/extras", worker.verify, extrasController.viewExtras);
router.post("/extrasUpload", worker.verify, extrasController.uploadExtras);
router.get("/showReport", worker.verify, reportController.start);
router.get("/permisos", worker.verify, permisosController.permisos);

module.exports = router;
