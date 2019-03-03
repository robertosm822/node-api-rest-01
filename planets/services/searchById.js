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

- Adicionar um planeta (com nome, clima e terreno)
- Listar planetas
- Buscar por nome
- Buscar por ID
- Remover planeta
*/
