const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	surname: { type: String, required: true },
	links: [{ type: Schema.Types.ObjectId, ref: 'Link' }],
	items: [{ type: Schema.Types.ObjectId, ref: 'Item' }]
})

module.exports = model('User', schema)
