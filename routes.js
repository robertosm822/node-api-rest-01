//let hello = require('./hello/index')
//let bills 	= require('./bills/index')
let planets	= require('./planets/index')

module.exports =  (app) => {
	//app.use('/', hello)
	//app.use('/bills', bills)
	app.use('/planets', planets)

}
