let Planet = require('./../../schema/Planet')
//find by id
module.exports = (req, res) => {
	//let planet = new Planet(req.body)

	Planet.findById(req.params.id, function (err, data) {
		if(err) {
		    return;
		}

		res.json(data);
	    });
		
}


/*
exports.update = function (req, res) {
    Car.update({
        _id: req.params.id
    }, req.body, function (err, car) {
        if(err) {
            return;
        }

        res.redirect('/cars');
    });
};
*/
