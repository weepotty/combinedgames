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
  str = req.url
current = str.slice(1)
currentPage = current.charAt(0).toUpperCase() + current.slice(1)
  res.render("feelings", {games, currentPage, stickerTypes});
});

app.get("/numbers", (req, res) => {
  str = req.url
current = str.slice(1)
currentPage = current.charAt(0).toUpperCase() + current.slice(1)


  res.render("numbers", {games, stickerTypes, currentPage});
});

app.get("/colours", (req, res) => {
  str = req.url
  current = str.slice(1)
  currentPage = current.charAt(0).toUpperCase() + current.slice(1)
  
  res.render("colours", {currentPage, games, stickerTypes});
});

app.get("/alphabet", (req, res) => {
  str = req.url
  current = str.slice(1)
  currentPage = current.charAt(0).toUpperCase() + current.slice(1)
  
  res.render("alphabet", {currentPage, games, stickerTypes});
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`));
