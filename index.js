const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
 
  
  res.render("home");
});

app.get("/feelings", (req, res) => {
  res.render("feelings");
});

app.get("/colours", (req, res) => {
  res.render("colours");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
