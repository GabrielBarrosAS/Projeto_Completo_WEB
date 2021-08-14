import React from 'react'
import Main from '../Main/index'

export default class UsuarioAdm extends React.Component{
    siderData = [
        {
            title: 'Listar Usuários',
            link: '/entrar/Listar Usuários',
            icone: 'BsListUl'
        },
        {
            title: 'Buscar Usuário',
            link: '/entrar/Buscar Usuário',
            icone: 'BsSearch'
        },
        {
            title: 'Criar Usuário',
            link: '/entrar/Criar Usuário',
            icone: 'BsPlusCircle'
        },
        {
            title: 'Apagar Usuário',
            link: '/entrar/Apagar Usuário',
            icone: 'BsTrash'
        },
        {
            title: 'Atualizar Usuário',
            link: '/entrar/Atualizar Usuário',
            icone: 'BsArrowRepeat'
        },
        {
            title: 'Sair',
            link: '/',
            icone: 'ImExit'
        }
    ]
    render(){
        return(
            <div>
                <Main data = {this.siderData} novo={this.props.novo} atualiza={this.props.atualiza}/>
            </div>
        )
    }
}