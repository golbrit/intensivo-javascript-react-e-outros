import React from 'react'
import "./Imesada.css"
import {useState} from 'react';

function Imesada() {

    const [saldo, setSaldo] = useState('')
    const [valor, setValor] = useState('')
    function adicionarCredito(){
        let valorC = valor
        setSaldo(saldo + valorC)
    }
    function retiraDebito(){
        let valorD = valor
        setSaldo(saldo - valorD)
    }



    return (

        <div>
            <h2>iMesada</h2>
            <p>Saldo R$ {saldo}</p>
            <input type="text" 
            value={valor}
            onChange = {(e)=>setValor(e.target.value)}
            />
            
            
            <div className="botoes">
                <button className="btdDebito" onClick = {retiraDebito}>Débito</button>
                <button className="btdCredito" onClick = {adicionarCredito}>Crédito</button>    
            </div>    
        </div>
    )
}

export default Imesada
