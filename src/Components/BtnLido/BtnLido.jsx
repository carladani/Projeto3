import React, { useContext, useState } from "react";
import LidoContext from '../../Context/LidoContext'


function BtnLido(){
     const [leitura, setLeitura] = useState("Já li")
    const { lido, setLido } = useContext(LidoContext)
    const [ativo, setAtivo] = useState(false)
    function handleClick(){
            setLido(lido + 1);
            setLeitura("Que bom que leu");
            setAtivo(true);

    }
    return(
        <div>
            <button onClick={handleClick} disabled={ativo}>{leitura}</button>
        </div>
    );
}
export default BtnLido;