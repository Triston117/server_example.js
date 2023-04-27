import express from "express";
const app = express();

app.get("/hello", function (req, res) {
  res.send("Hi there");
});

app.get("/goodbye", () => {
  res.send("See ya");
});

app.listen(3000, () => {
  console.log("Listening at PORT 3000...");
});
