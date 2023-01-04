const mongoose = require('mongoose');

const kategoriSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      max: 32,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('kategori', kategoriSchema);
