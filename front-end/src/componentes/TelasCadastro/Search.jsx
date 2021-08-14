import React from 'react'
import '../../estilos/Cadastro.css'
import {Link} from 'react-router-dom'

export default class Search extends React.Component{
    constructor(props){
        super(props)

        this.myRef = React.createRef();
        this.print = this.print.bind(this)
    }
    
    print(){
        const list = []
        for (let index = 0; index < this.myRef.current.children.length; index++){
            for (let j = 1; j < this.myRef.current.children[index].children.length; j+=2){
                list.push(this.myRef.current.children[index].children[j].value)
            }
        }
        list.push(false)
        list.push(true)
        this.props.atualiza(list)
    }

    render(){
        return(
            <div id='cadastro'>
                <h1 id='cadastro'>BUSCAR USUÁRIO</h1>
                <div id='campos' ref={this.myRef}>
                    <div id='cadastroEsq' style ={{width: '100%',alignItems:'center'}}>
                        <label id='labelNome' style ={{justifyContent:'center'}}>EMAIL</label>
                        <input type="email" id="email"/>
                    </div>
                </div>
                <div id='botoes2'>
                    <Link to='/entrar'>
                        <button id='sair'>SAIR</button>
                    </Link>
                    <Link to='/entrar'>
                        <button id='cadastrar2' onClick={this.print}>
                            Buscar
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}