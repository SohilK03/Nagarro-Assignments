const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server Running Successfully");
});
app.post("/convert", (req, res) => {
  var grams = req.body.grams;
  var ans = grams / 1000;
  res.send({ value: ans });
});
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
