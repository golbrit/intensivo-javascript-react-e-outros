import React from 'react'
import "./Imesada_feitoPorMin.css"
import {useState} from 'react';

function Imesada() {

    const [saldo, setSaldo] = useState(0)
    const [valor, setValor] = useState(0)
    function adicionarCredito(){
        let valorC = valor
        setSaldo(saldo + valorC)
    }
    function retiraDebito(){
        let valorD = valor
        if(valorD>saldo){
            alert("Você está sem saldo!!!!!")
            return
        }
        setSaldo(saldo - valorD)
        
    }



    return (

        <div className='tudao'>
            <div className='tela'>
                <h2>💸iMesada💸</h2>
                <p className='pSaldo'>Saldo {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}</p>
                <input type="text" 
                min={0.00}
                value={valor}
                onChange = {(e)=>setValor(Number(e.target.value))}
                />
            </div>
            
            <div className="botoes">
                <button className="btdDebito" onClick = {retiraDebito}>Debitar</button>
                <button className="btdCredito" onClick = {adicionarCredito}>Creditar</button>    
            </div>    
        </div>
    )
}

export default Imesada
