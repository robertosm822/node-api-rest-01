let Planet = require('./../../schema/Planet')

module.exports = (req, res) => {
	//let planet = new Planet(req.body)
	var q = req.query.name;
	//console.log(q);
	//RegExp para consultar por name
	Planet
		.find({
				name: { $regex : [req.query.name] }
				}, function(err, data){
					res.json(data);
				}).limit(20);
		
}
