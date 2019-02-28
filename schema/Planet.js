let mongoose = require('mongoose')

const Planet = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	climate: {
		type: String,
		required: true
	},
	terrain: {
		type: String,
		required: true
	},
	films:{
		type: String,
		default: null
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports  = mongoose.model('Planet', Planet)
