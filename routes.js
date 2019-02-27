import hello from './hello/index'
import bills from './bills/index'
import planets from './planets/index'

export default (app) => {
	app.use('/', hello)
	app.use('/bills', bills)
	app.use('/planets', planets)

}