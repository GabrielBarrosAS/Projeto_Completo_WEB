import React from 'react'

import api from '../service/api'
import '../../estilos/sideBar.css'
import SideBar from '../sidebar/Sidebar'
export default class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            usuarios:[]
        }
    }
    
    componentDidMount(){
        if(this.props.novo.post === true){
            this.createUsuario()
            this.props.atualiza(["","","","","","","","",false,false])
        }else if(this.props.novo.search === true){
            this.search(this.props.novo)
            this.props.atualiza(["","","","","","","","",false,false])
        }
    }

    loadUsuarios = async () => {
        const response = await api.get('/usuarios')
        this.setState({usuarios: response.data})
    }

    createUsuario = async () => {
        const dados = this.props.novo
        let aux = {
            "name": dados.nomeCadastrado,
            "email": dados.emailCadastrado,
            "password": dados.senhaCadastrada,
            "cpf": dados.CPFCadastrado,
            "endereço":{
              "CEP": dados.CEPCadastrado,
              "cidade": dados.cidadeCadastrada,
              "rua": dados.ruaCadastrada,
              "numero": dados.numeroCadastrado
            },
            "funcionario": true
        }
        await api.post('/usuarios',aux)
        this.loadUsuarios()
    }

    search = async (novo) =>{
        const response = await api.get('/usuarios')
        let id = ''
        for (let index = 0; index < response.data.length; index++) {
            if(response.data[index].email === novo.emailCadastrado){
                id = response.data[index]._id
            }
        }
        console.log(id)
        const response2 = await api.get('/usuarios/'+`${id}`)
        this.setState({usuarios: response2.data})
    }

    computeContent(){
        if(this.state.usuarios.length > 1){    
            const list = []
            this.state.usuarios.map(usuario =>(
                list.push(
                <div className='itemContent' key={usuario._id}>
                    <span>{usuario.name}</span>
                    <span>{usuario.email}</span>
                    <span>{usuario._id}</span>
                </div>
                )
            ))
            return list
        }else if(this.state.usuarios.length !== 0){
            return (<div className='itemContent'>
                        <span>{this.state.usuarios._id}</span>
                        <br/>
                        <span>{this.state.usuarios.name}</span>
                        <br/>
                        <span>{this.state.usuarios.email}</span>
                    </div>)
        }
    }

    render(){
        return(
            <div>
                <SideBar data={this.props.data}
                    get={this.loadUsuarios}
                    post={this.createUsuario}
                    search={this.search}
                    content={this.computeContent()}
                    >
                </SideBar>
            </div>
        )
    }
}