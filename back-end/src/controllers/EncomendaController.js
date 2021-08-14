const mongoose = require('mongoose')

const Encomenda = mongoose.model('Encomenda')

module.exports = {
    async listagem(req,res){
        const encomendas = await Encomenda.find();

        return res.json(encomendas)
    },

    async criar(req,res){
        const encomenda = await Encomenda.create(req.body);

        return res.json(encomenda)
    },

    async buscar(req,res){
        const encomenda = await Encomenda.findById(req.params.id)

        return res.json(encomenda)
    },
    async atualizar(req,res){
        const encomenda = await Encomenda.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        })

        return res.json(encomenda)
    },

    async apagar(req,res){
        const encomenda = await Encomenda.findByIdAndDelete(req.params.id)

        return res.send(encomenda)
    },
    
    async listagemCPF(req,res){
        const encomenda = await Encomenda.find({'clientes.CPF': req.params.CPF})

        return res.json(encomenda)
    }
}
