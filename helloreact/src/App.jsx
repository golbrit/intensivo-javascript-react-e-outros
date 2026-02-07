import './App.css';
import Cabecalho from './componentes/Cabecalho-header';
import Imesada from './componentes/Imesada.jsx';
import ListaProdutos from './componentes/ListaProdutos.jsx';


function App() {

  return (

    <div className= {'container-app'}>
      <Cabecalho/>
      {/* <ListaProdutos/>   */}
      <Imesada/>
          
    </div>

  )
}

export default App;
