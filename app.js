const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./env/.env" });
const port = process.env.port;
const app = express();
const router = require("./routes/routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const link = `http://localhost:${port}`;
const qrGen = require("./tools/qr");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(router);
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(link);
  // qrGen(link);
});
