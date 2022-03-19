const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


const games = ["feelings", "colours", "numbers", "alphabet"]
const stickerTypes = ["animals", "dinosaurs", "tractors"]


app.get("/", (req, res) => {
  res.render("home", {games, stickerTypes});
});

app.get("/feelings", (req, res) => {
  res.render("feelings", {games, stickerTypes});
});

app.get("/colours", (req, res) => {
  let str = req.url
  const current = str.slice(1)
  const currentPage = current.charAt(0).toUpperCase() + current.slice(1)



  res.render("colours", {currentPage, games, stickerTypes});
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
