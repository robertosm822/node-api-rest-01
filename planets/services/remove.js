let Planet = require('./../../schema/Planet');

//module.exports =
module.exports =  (req, res) => {
	return Planet
		.findByIdAndRemove(req.params.id)
		.then(() => res.status(204).end())
		.catch(err => res.status(500)
						 .json({ status: false, data: {} })
			)
}