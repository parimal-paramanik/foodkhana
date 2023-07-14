const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String
    }
  },
  { versionKey: false }
);

const ProductModel = mongoose.model('Product', productSchema);

module.exports = {ProductModel};
