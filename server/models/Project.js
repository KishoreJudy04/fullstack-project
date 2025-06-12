const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  techStack: [String],
  github: String,
  demo: String
});

module.exports = mongoose.model("Project", ProjectSchema);
