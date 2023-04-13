const mongoose = require("mongoose");
const { Schema } = mongoose;

const PassagesSchema = new Schema({
  doc_id: {
    type: Number,
    required: true,
  },
  passage: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  format: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

const Passages = mongoose.model("Passages", PassagesSchema);
module.exports = { Passages };
