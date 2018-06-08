import express from 'express'
import bodyParser from 'body-parser'


const routers = require('./app/router/routers')


function runServer(){
    const app = express()
    app.use(bodyParser.urlencoded({extended : true}))
    app.use(bodyParser.json())
    
    const PORT = 3000 
    
    routers.mainRouter(app)

    app.listen(PORT,() => {
        console.log(`Connect localhost por ${PORT}`)
    })
}

runServer()

