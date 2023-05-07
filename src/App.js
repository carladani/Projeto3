import './App.css';
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './pages/Home';
import Resenha from './pages/Resenha';
import ContagemContext from './Context/ContagemContext';
import LidoContext from './Context/LidoContext';
import React, { useState } from 'react';

function App() {
  const [contagem, setContagem] = useState(3);
  const [lido, setLido] = useState(5);
  return (
    <div className="App">
      <ContagemContext.Provider value={{contagem, setContagem}}> 
      <LidoContext.Provider value={{lido, setLido}}>     
        <Router>
         <Routes>
          <Route path='/' element={<Home contagem={contagem} lido={lido}/>} />
          <Route path='/resenha' element={<Resenha contagem={contagem} lido={lido}/>} />
        </Routes>
      </Router>
      </LidoContext.Provider>
      </ContagemContext.Provider>
    </div>
  );
}

export default App;