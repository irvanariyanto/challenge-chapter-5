const express = require("express");
const app = express();
const port = 3000;
const users = require("./users.json");
const auth = require("./middleware/auth");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/game", (req, res) => {
  res.render("game");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/user", auth, (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
