import React from 'react'
import '../../estilos/sideBar.css'
import {BsListUl,BsSearch,BsPlusCircle,BsTrash, BsArrowRepeat} from "react-icons/bs";
import { ImExit } from "react-icons/im";
import {Link} from 'react-router-dom'

export default class Sidebar extends React.Component{

    renderIcone(obj){
        switch (obj) {
            case 'BsListUl':
                return <BsListUl className='icon'/>
            case 'BsSearch':
                return <BsSearch className='icon'/>
            case 'BsPlusCircle':
                return <BsPlusCircle className='icon'/>
            case 'BsTrash':
                return <BsTrash className='icon'/>
            case 'BsArrowRepeat':
                return <BsArrowRepeat className='icon'/>
            case 'ImExit':
                return <ImExit className='icon'/>
            default :
            break;
        }
    }

    evento(title){
        switch (title) {
            case 'Listar Usuários':
                return this.props.get()
            default:
            break
        }
    }

    renderButton(){
        const list = this.props.data.map(obj =>(
            <div key={obj.title} id='conteudoList'>
                <Link to={obj.link} style={{ height: '100%',width: '100%'}}>
                    <button key={obj.title} id='bt' onClick={()=>this.evento(obj.title)}>{obj.title}</button>
                </Link>
                {this.renderIcone(obj.icone)}
            </div>
        ));
        return list
    }

    render(){
        return(
            <div id='containerReturn'>
                <div className='bar' id='SidebarEsq'>
                    <div className='List'>    
                        {this.renderButton()}
                    </div>
                </div>
                <div id='page'>
                    <div id='cabecalho'>TELA DO ADMINISTRADOR</div>
                    <div id='conteudo'>
                        {this.props.content}
                    </div>
                </div>
            </div>
        )
    }
}