import React from 'react';
import './global.css';
import Routes from './routes';

// JSX (Javascript XML) -- html integrado em um arquivo .js
//componente é uma função que retorna html.

function App() {
  /*
    let [counter,setCounter] = useState(0); // retorna um Array [valor, funcaoDeAtualizacao]
    function increment(){
      setCounter(counter + 1);
      console.log(counter);
    }
  */
  return (
    <Routes/>
  );
}

export default App;