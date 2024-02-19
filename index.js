const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose
  .connect("mongodb+srv://mugisha:walmond123@cluster0.gemn4ff.mongodb.net/posts",
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    const app = express();
    app.use(express.json());
    app.use("/api", routes);

    app.listen(8000, () => {
      console.log("Server has started!");
    });
  });
