import React from "react";
import './Book.css'

function Book(props){
    return(
        <div id="card">
            <img id="livro" src={props.livro} alt="capa do livro"  />
            <p>{props.titulo}</p>
            <div id="stars">
                {props.star1}{props.star2}{props.star3}{props.star4}{props.star5}
            </div>
        </div>
);
}

export default Book;