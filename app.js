let express = require('express')
let bodyParser = require('body-parser')
let morgan = require('morgan')
let mongoose = require('mongoose')
let cors = require('cors')
//recurso para manipular consumo de apis http via ajax request()
//let request = require('request')

let routes = require('./routes')

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
	
	console.log('Express server has been started')
})
//module.exports = app;
