import React from "react";
import "./Review.css"
import Book from "../Book/Book";
import {IoIosStar} from "react-icons/io";
import {IoIosStarOutline} from "react-icons/io";


function Review(props){
    return(
        <div id="avaliacao">
            <div>
            <Book livro={props.capa} titulo={props.obra} star1={<IoIosStar/>} star2={<IoIosStar/>} star3={<IoIosStar/>} star4={<IoIosStar/>} star5={<IoIosStarOutline/>}/>
            </div>
            <div id="texto">
                    <h2>{props.titulo}</h2>
                    <p>{props.texto}</p>
             </div>
                       
        </div>
    );
}
export default Review;