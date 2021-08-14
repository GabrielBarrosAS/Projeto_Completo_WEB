import React from 'react'
import TelaLogin from './TelaLogin'
import Cadastro from './TelasCadastro/Cadastro'
import Search from './TelasCadastro/Search'
import UsuarioSistema from "./telasUsuarios/UsuarioSistema"
import UsuarioAdm from './telasUsuarios/UsuarioAdm'
import CadastroUser from './telasUsuarios/CadastroUser'
import {Switch,Route} from 'react-router-dom'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nomeCadastrado: '',
            emailCadastrado: '',
            CEPCadastrado: '',
            ruaCadastrada: '',
            senhaCadastrada: '',
            CPFCadastrado: '',
            cidadeCadastrada: '',
            numeroCadastrado: '',
            post: false,
            search: false
        };

        this.setEstado = this.setEstado.bind(this)
    }

    setEstado = (valores)=>{
        this.setState({
            nomeCadastrado: valores[0],
            emailCadastrado: valores[1],
            CEPCadastrado: valores[2],
            ruaCadastrada: valores[3],
            senhaCadastrada: valores[4],
            CPFCadastrado: valores[5],
            cidadeCadastrada: valores[6],
            numeroCadastrado: valores[7],
            post: valores[8],
            search: valores[9],
        })
    }

    setEmailBusca = (valores) =>{
        this.setState({
            emailCadastrado: valores[0],
            post: valores[1],
            search: valores[2]
        })
    }
    
    render(){
        return(
        <div>
        <Switch>
            <Route exact path='/' component={TelaLogin}/>
            <Route path='/home' 
                render={props => <UsuarioSistema {...props} nome={this.state.nomeCadastrado} data={this.state.dataNascCadastrada} email={this.state.emailCadastrado}/>}/>
            <Route exact path='/entrar' render={props =>
                <UsuarioAdm {...props} novo={this.state} atualiza={this.setEstado}/>}/>
            <Route exact path='/entrar/Listar Usuários' render={props => <UsuarioAdm {...props} novo={this.state} atualiza={this.setEstado}/>}/>
            <Route exact path='/entrar/Criar Usuário' render={props => <Cadastro {...props} atualiza={this.setEstado}/>}/>
            <Route exact path='/entrar/Buscar Usuário' render={props => <Search {...props} atualiza=
            {this.setEmailBusca}/>}/>
            <Route exact path='/Cadastro' component={CadastroUser}/>
            
        </Switch>
        </div>
        )
    }
}