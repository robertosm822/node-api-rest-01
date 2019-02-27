import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import mongoose from 'mongoose'
import cors from 'cors'
//recurso para manipular consumo de apis http via ajax request()
import request from 'request'

import routes from './routes'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//server local
//let db = mongoose.connect('mongodb://localhost:27017/dev_api_js', { useNewUrlParser: true })
//server MongoDB.Atlas Cloud
let db = mongoose.connect('mongodb+srv://strarWars:78Rest65@cluster0-rtnuj.mongodb.net/devrestapi?retryWrites=true', { useNewUrlParser: true })

routes(app)

app.listen(3000, () => {
	/*
	request('https://swapi.co/api/planets/1/', function(error, response, body){
		let Planeta = JSON.parse(body);
		console.log(Planeta.films);
	});
	*/
	
	console.log('Express server has been started')
})