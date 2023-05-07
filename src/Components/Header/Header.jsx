import React from "react";
import './Header.css'
import { useState, useEffect } from "react";

function Header(props){
    const [classe, setClasse] = useState("")

    useEffect(()=>{
        if (props.contagem > 0)
            setClasse("destaque")
    }, [props.contagem])
    console.log(props);
    return(
        <header>
            <div id="perfil">
            <img id="foto" src={props.imagem} alt="usuario"  />
            <span>
            {props.nome}
            </span>
            </div>

            <div id="lidos" className={classe}>
                <h2>Livros lidos 
                <br></br>
               {props.lido}</h2>
            </div>

            <div id="ler">
                <h2>Vou ler 
                <br></br>
                {props.contagem}</h2>
            </div>
        </header>
    );
}

export default Header;