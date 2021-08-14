import React from 'react'
import '../estilos/TelaLogin.css'
import {Link} from 'react-router-dom'
import imagem from '../img/pacote.png'
import api from './service/api'
export default class Telalogin extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            email: '',
            funcionario: false,
            usuarios:[],
            entrar:'',
        }

        this.change = this.change.bind(this)
        var a=''
    }

    componentDidMount = async () => {
        const response = await api.get('/usuarios')
        this.setState({usuarios: response.data})
    }

    change(e){
        this.setState({email: e.target.value})
    }

    render(){
        return(
            <div id='containerPrincipal'>
                <div id='logo'>    
                    <img src={imagem} alt="falha" id='img'/>
                    <label id='flash'><u>FLASH</u></label>
                </div>
                <div id='login'>    
                    <label>LOGIN:</label>
                    <input type="email" id="emailLogin" onChange={(e)=>{this.change(e)}}/>
                </div>
                <div id='senha'>
                    <label>SENHA:</label>
                    <input type="password" id="senhaLogin"/>
                </div>
                <div id='botoes'>
                    <Link to={()=>{
                            for (let index = 0; index < this.state.usuarios.length; index++) {
                                if(this.state.email === this.state.usuarios[index].email){  
                                    if(this.state.usuarios[index].funcionario){ 
                                        return '/entrar'
                                    }else{
                                        return '/home'
                                    }
                                }
                            }}}>
                        <button id='entrar'>ENTRAR</button>
                    </Link>
                    <Link to='/cadastro'>
                        <button type="submit" id='cadastrar'>CADASTRO</button>
                    </Link>
                </div>
            </div>
        )
    }
}