const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routers/uploadRoute");
require("dotenv").config();

global.__basedir = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
require("./database/db").connect();
require("./script").sendAutoMessage();

//const port = 5000;

app.listen(process.env.PORT, () => {
  console.log("server is up on port 5000");
});
