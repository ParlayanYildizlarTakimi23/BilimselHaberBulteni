const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const haberSchema = new mongoose.Schema(
  {
    baslik: {
      type: String,
      trim: true,
      min: 3,
      max: 160,
      required: true
    },
    
    icerikMetin: {
      type: {},
      required: true,
      min: 200,
      max: 2000000
    },
    icerikResim: {
      data: Buffer,
      contentType: String
    },
    kategoriler: [{ type: ObjectId, ref: 'kategori', require: true }],
    yazar: {
      type: ObjectId,
      ref: 'kullanici'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('haber', haberSchema);
