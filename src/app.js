const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./routes/index");

app.use(bodyParser.json());
app.use("/", routes);
module.exports = app;
