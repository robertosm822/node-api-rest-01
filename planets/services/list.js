let Planet = require('./../../schema/Planet')

module.exports = (req, res) => {
	Planet
		.find({})
		.populate('category')
		.then((planets) => {
			if (!planets || !planets.length) {
				return res.status(404)
						  .json({
							  status: false,
							  data: []
						  })
			}

			return res.status(200)
					  .json({
						  status: true,
						  data: planets
					  })
		})
		.catch(err => res.status(500)
					     .json({
							 status: false,
							 data: []
						 })
		)
}
