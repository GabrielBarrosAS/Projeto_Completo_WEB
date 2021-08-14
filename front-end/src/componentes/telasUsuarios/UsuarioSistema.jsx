import React from 'react'
import '../../estilos/Estilo.css'
import {Link} from 'react-router-dom'
export default class UsuarioSistema extends React.Component{
    render(){
        return(
           <div>                 
                         <div id="area-cabeçalho">
                                <div id="area-logo"> 
                                <h1>Flash<span class="branco">Encomendas</span></h1>
                                </div>
                                <div id="area-menu"> 
                                        <a href="index.html">Home</a>
                                        <a href="jogos.html">Buscar encomenda</a>
                                        <a href="celulares.html">Rastrear</a>
                                        <a href="informatica.html">A empresa</a>
                                        <a href="eletronicos.html">Contatos</a>
                                </div>
                                </div>
                                <div id="area-principal">
                                    <div id="area-postagens">
                                        <div class="postagem">
                                            <h2>Nosso lema</h2>
                                            <span class="data-post">Postado 18/06/2021</span>
                                            
                                            <p>
                                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <a href="">Leia Mais</a>
                                        </div>
                                        <div class="postagem">
                                            <h2>Como utilizar o nosso sistema</h2>
                                            <span class="data-post">Postado 15/06/2021</span>
                                            <p>
                                                simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                            </p>
                                            <a href="">Leia Mais</a>
                                        </div>
                                </div>
                </div> 
                <div id="rodape">
                    <Link to='/'>
                            <button >SAIR</button>
                    </Link>    
                </div>             
                           
            </div>
        )
    }
}