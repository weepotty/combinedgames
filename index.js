const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/feelings", (req, res) => {
  res.sendFile(__dirname + "/feelings.html");
});

app.get("/colours", (req, res) => {
  res.sendFile(__dirname + "/colours.html");
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
