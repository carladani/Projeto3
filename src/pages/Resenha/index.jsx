import profile from '../../assets/profile.jpg';
import bichos from '../../assets/bichos.jpeg';
import './Resenha.css';
import Header from '../../Components/Header/Header';
import Menu from '../../Components/Menu/Menu';
import Review from '../../Components/Review/Review';
import {IoIosHeart} from "react-icons/io";
import {IoIosChatbubbles} from "react-icons/io";
import BtnContagem from '../../Components/BtnContagem/BtnContagem';
import BtnLido from '../../Components/BtnLido/BtnLido';




function Resenha(props) {
  console.log(props);
  return (
  <div className="App"> 
   <Header  nome="Carla Dani" numero_lido="5"  imagem={profile} contagem={props.contagem} lido={props.lido}/>
      <hr></hr>

    <div id="line1">
      <div className="esqueda">
        <Menu texto1="Favorito" icone1={< IoIosHeart/>} icone4={<IoIosChatbubbles/>}texto4="Resenha"/>
      </div>
  
      <div className="direita">
        <h2>Resenhas</h2>
          <div>
            <Review obra="Rev. dos bichos" capa={bichos} titulo="O  totalitarismo contado por animais" texto="Fusce tincidunt lacus .Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          </div>
          <div>
          <BtnContagem />
          <BtnLido/>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Resenha;