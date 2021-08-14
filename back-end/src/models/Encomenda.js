const mongoose = require('mongoose')

const EncomendaSchema = new mongoose.Schema({
    clientes:[{
        nome:{
            type: String,
            require: true,
        },

        isDestinatario:{
            type: Boolean,
            require: true,
        },

        CPF:{
            type: String,
            require: true,
        },
        RG:{
            type: String,
            require: true,
        },
        contato:{
            type: String,
            require: true
        }
    }],
    valorEnvio:{
        type: Number,
        require: true,
    },
    idFuncionario:{
        type: String,
        require: true,
    },
    dataEnvio:{
        type: Date,
        default: Date.now,
    },
    endereco:{
        CEP:{
            type: String,
            require: true,
        },
        cidade:{
            type: String,
            require: true,
        },
        rua:{
            type: String,
            require: true,
        },
        numero:{
            type: Number,
            require: true,
        },
    }
})

module.exports = mongoose.model('Encomenda',EncomendaSchema)