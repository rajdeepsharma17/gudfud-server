const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const productSchema = mongoose.Schema({
  name:   { type: String, required: true },
  type:   [String],
  price:  { type: Number, min: 0 },
  inStock: Boolean,
  image:   String,
});

module.exports = mongoose.Model('Product', productSchema);
