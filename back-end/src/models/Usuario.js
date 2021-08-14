const mongoose = require('mongoose')

const UsuarioSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    cpf:{
        type: String,
        require: true,
    },
    endereço:{
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
            type: String,
            require: true,
        }
    },
    funcionario:{
        type: Boolean,
        require: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('Usuario',UsuarioSchema)