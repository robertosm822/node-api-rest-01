import mongoose from 'mongoose'

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
		type: Array,
		required: false
	},
	date: {
		type: Date,
		default: Date.now
	}
})

export default mongoose.model('Planet', Planet)