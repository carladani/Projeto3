import React from "react";
import './Menu.css'
import {Link} from "react-router-dom";


function Menu(props){
    return(
        <div id="painel">
            <h2>Selecione as opções...</h2>
            <Link to="/"><button>{props.texto1}{props.icone1}</button></Link>
            <Link to="/resenha"><button>{props.texto4}{props.icone4}</button></Link>
            
        </div>
    );
}

export default Menu;