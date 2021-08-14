import React from 'react'
import '../../estilos/Cadastro.css'
import {Link} from 'react-router-dom'
import api from '../service/api';

export default class CadastroUser extends React.Component{
    constructor(props){
        super(props)

        this.myRef = React.createRef();
        this.print = this.print.bind(this)
    }
    
    print = async () => {
        const list = []
        for (let index = 0; index < this.myRef.current.children.length; index++){
            for (let j = 1; j < this.myRef.current.children[index].children.length; j+=2){
                list.push(this.myRef.current.children[index].children[j].value)
            }
        }

        let aux = {
            "name": list[0],
            "email": list[1],
            "password": list[4],
            "cpf": list[5],
            "endereço":{
                "CEP": list[2],
                "cidade": list[6],
                "rua": list[3],
                "numero": list[7]
            },
            "funcionario": false
        }
        
        await api.post('/usuarios',aux)

    }

    render(){
        return(
            <div id='cadastro'>
                <h1 id='cadastro'>CADASTRO</h1>
                <div id='campos' ref={this.myRef}>
                    <div id='cadastroEsq'>
                        <label id='labelNome'>Nome do usuário</label>
                        <input type="text" id='nome'/>
                        <label id='labelEmail'>Email</label>
                        <input type="email" id='email'/>
                        <label id='labelCEP'>CEP</label>
                        <input type="text" id="CEP"/>
                        <label id='labelRua'>Rua</label>
                        <input type="text" id="Rua"/>
                    </div>
                    <div id='cadastroDir'>
                        <label id='labelSenha'>Senha</label>
                        <input type="password" id="senhaCadastro"/>
                        <label id='labelCPF'>CPF</label>
                        <input type="text" id="cpf"/>
                        <label id='labelCidade'>Cidade</label>
                        <input type="text" id='cidade'/>
                        <label id='labelNumero'>Numero</label>
                        <input type="number" id='numero'/>
                    </div>
                </div>
                <div id='botoes2'>
                    <Link to='/'>
                        <button id='sair'>SAIR</button>
                    </Link>
                    <Link to='/'>
                        <button id='cadastrar2' onClick={this.print}>
                            CADASTRAR
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}