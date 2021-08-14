const express = require('express')
const routes = express.Router()
const EncomendaController = require('./controllers/EncomendaController')
const UsuarioController = require("./controllers/UsuarioController")

routes.get("/encomendas",EncomendaController.listagem)
routes.post("/encomendas/criar" ,EncomendaController.criar)
routes.get("/encomendas/buscar/:id",EncomendaController.buscar)
routes.put("/encomendas/atualizar/:id",EncomendaController.atualizar)
routes.delete("/encomendas/apagar/:id",EncomendaController.apagar)
routes.get("/encomendas/:CPF",EncomendaController.listagemCPF)
routes.get('/',(req,res)=>
    res.send("Bem vindo à Flash Encomendas")
)

routes.get("/usuarios", UsuarioController.index)
routes.post("/usuarios", UsuarioController.store)//create
routes.get("/usuarios/:id", UsuarioController.show)//view
routes.put("/usuarios/:id", UsuarioController.update)//atualizar
routes.delete("/usuarios/:id", UsuarioController.destroy)//deletar

module.exports = routes
