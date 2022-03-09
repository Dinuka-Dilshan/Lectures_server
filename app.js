require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const Subject = require("./models/Subject");

const loadData = require('./loadData');

const app = express();
app.use(cors());


app.get("/", async (req, res, next) => {
  try {
    const subjectData = await Subject.find();
    res.json(subjectData);
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.get("/:id", async (req, res, next) => {
  try {
    const filteredSubject = await Subject.find({ _id: req.params.id });
    res.json(filteredSubject);
  } catch (error) {
    res.json({
      error,
    });
  }
});

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    // loadData();
    app.listen(process.env.PORT);
    console.log("started");
  })
  .catch((err) => {
    console.log(err);
  });
