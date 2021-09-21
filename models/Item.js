const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  category: { type: String, required: true },
  year: { type: String, required: true },
  // brand: { type: String },
  // millage: { type: Number },
  // model: { type: String },
  // country: { type: String },
  // price: { type: String },
  // weight: { type: Number },
  date: { type: Date, default: Date.now },
  // clicks: { type: Number, default: 0 },
  // files: { type: Array },
  // description: { type: String },
  owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Item', schema)
