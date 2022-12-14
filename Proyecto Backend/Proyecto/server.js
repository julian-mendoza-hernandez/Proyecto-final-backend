const express = require('express') 
const telcelRouter = require('./routes/telcel')
const ticketsRouter = require('./routes/tickets')
const cors = require("cors")

class Server{
    constructor(){
      this.app = express()
      this.paths = {
        telcel:"/api/v1/telcel",
        tickets:"/api/v1/tickets"

        }
        this.middlewares()
        this.routes()
      
    }

routes(){
    
  //this.app.get('/', (req, res) => {
    //res.send('Hello World')
    //  }
    this.app.use(this.paths.telcel, telcelRouter)
    this.app.use(this.paths.tickets, ticketsRouter)
}

middlewares() {
  this.app.use(cors()) //Permite solicitudes de origen cruzado//
  this.app.use(express.json()) //Habilita la lectura de contenido en formato JSON//
}

listen(){
    this.app.listen(process.env.PORT,() => { //Poner un this aqui xd//
    console.log("Servidor corriendo en el puerto:", process.env.PORT)
})
}
}

module.exports = Server
