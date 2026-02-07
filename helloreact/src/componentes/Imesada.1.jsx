import React from 'react'
import "./Imesada.css"
import {useState} from 'react';


function Imesada() {

    
    function atualizaValor(e){
        setInputValor(e.target.value)
    }

    function creditar(){
        setSaldo(saldo + Number(inputValor))
        setInputValor ('')
    };
    function debitar(){
        setSaldo(saldo - Number(inputValor))
        setInputValor ('')
        
    };

    return (
        
        <div className={'container-imesada'}>
                <div className="form-imesada">
                    
                    <h2>💸iMesada💸</h2>
                    <p >Saldo R$:{saldo}</p>
                    

                    <input 
                        type="text" 
                        value={inputValor}
                        onChange={atualizaValor}
                        />
                    

                    <div className="botoes">
                        <button className="btdDebito" onClick = {debitar}>Debitar</button>
                        <button className="btdCredito" onClick = {creditar}>Creditar</button>    
        
                    </div>
                    
                </div>
                
        </div>
    )
}

export default Imesada;
