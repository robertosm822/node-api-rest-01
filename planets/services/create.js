let Planet = require('./../../schema/Planet');
let rest = require('request');



module.exports = (req, res) => {
	let planet = new Planet(req.body)
	
	console.log(req.body.films);
	var Nome = planet.name;
	let NomePlaneta = Nome.split(" ");
	//litar os filmes relacionados ao nome do planeta listados na swapi.co/api
	var restT = rest('https://swapi.co/api/planets/?search='+NomePlaneta[0], function(error, response, body){
					let Planeta = JSON.parse(body);
					const stringFilms = JSON.stringify(Planeta.results[0].films);
					if(!Planeta.results.length){
						return '[""]';
					} else{
						//console.log(stringFilms);
						if(planet.films != null || planet.films != ""){
							planet.films = stringFilms;
							planet
								.save()
								.then((created) => {
									if (!created) {
										return res.status(404)
												  .json({ status: false, data: {} })
									}

									return res.status(201)
											  .json({ status: true, data: created })
								})
								.catch(err => res.status(500)
												 .json({ status: false, data: {} }) 
								)
						} //fim da verificacao
						
					}
					
				});
	
	
}
