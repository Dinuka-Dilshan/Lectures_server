const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  name: String,
  src: String,
  calLink:String,
  recordings: [{ title: String, link: String }],
  notes: [{ title: String, link: String }],
});

module.exports = mongoose.model("subject", subjectSchema);
