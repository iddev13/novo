const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
  category: { type: String, required: true },
  year: { type: Number, required: true },
  brand: { type: String, required: true },
  km: { type: Number, required: true },
  model: { type: String, required: false },
  country: { type: String, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  imageSrc: { type: String, default: '' },
  description: { type: String, required: true },
  owner: { type: Types.ObjectId, ref: 'User' }
})

module.exports = model('Item', schema)
