const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  category: { type: String, required: true },
  year: { type: String, required: true },
  brand: { type: String, required: true },
  // milaege: { type: Number, required: false },
  model: { type: String, required: true },
  country: { type: String, required: true },
  price: { type: String, required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // clicks: { type: Number, default: 0 },
  files: { type: Buffer },
  description: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Item', schema)
