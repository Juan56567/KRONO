const express = require("express");
const router = express.Router();

//controladores
const loginController = require("../controllers/loginController");
const homeController = require("../controllers/homeController");
const extrasController = require("../controllers/extrasController");
const reportController = require("../controllers/reportController");
const newEmployeeController = require("../controllers/newEmployee");

//rutas
router.get("/", loginController.loginLoad);
router.post("/auth", loginController.auth);
router.get("/home", homeController.start);
router.get("/createEmployee", newEmployeeController.createEmployeeView);
router.post("/createEmployee", newEmployeeController.createEmployee);
router.get("/extras", extrasController.viewExtras);
router.post("/extrasUpload", extrasController.uploadExtras);
router.get("/showReport", reportController.start);

module.exports = router;
