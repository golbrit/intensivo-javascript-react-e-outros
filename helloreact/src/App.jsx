import './App.css';
import Cabecalho from './componentes/Cabecalho-header';
import { useState } from 'react';
import Imesada from './componentes/Imesada.jsx';


function App() {

  // const [cont, setCont] = useState(0);
  // const [inpPreco, setInpPreco] = useState('');
  // const [dobro, setDobro] = useState('');

  // function calcularDobro(){
  //   let valor = inpPreco
  //   setDobro(valor *2)
    
  // }

  // function tratarTeste(){
  //   setCont(cont +1)
  //   console.log(cont);
    
  // }
  



  

  return (
    <>
      <Imesada/>
      {/* <Cabecalho/>
      <h1>Hello react</h1>
      <p>Parágrafo </p>
      <input type="text" 
        value={inpPreco}
        onChange={(e)=> setInpPreco(e.target.value)}
      />

      <button onClick={tratarTeste}>Teste </button>
      {cont}
      <div className='resultado'>
        Dobro do número: {dobro}
      </div><button className='dobrar' onClick={calcularDobro}>Dobrar</button>   */}
      
    </>
  )
}

export default App;
