const mongoose = require('mongoose');


const Usuario = mongoose.model('Usuario')

module.exports = {
    async index(req,res){
        //listando
        const usuarios = await Usuario.find();

        return res.json(usuarios)
    },

    async store(req,res){
        //criacao
        const usuario = await Usuario.create(req.body)

        return res.json(usuario)
    },

    async show(req, res){
        //buscar um
        const usuario = await Usuario.findById(req.params.id)

        return res.json(usuario)
    },

    async update(req,res){
        //att
        const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        return res.json(usuario)
    },

    async destroy(req,res){
        //deletar
        const usuario = await Usuario.findByIdAndRemove(req.params.id)

        return res.send()
    }
}