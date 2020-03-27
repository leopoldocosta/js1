import React from 'react';

import './global.css';

import Routes from './routes';
/** alterado => import Logon from './pages/Logon'; */
/* não precisa do index por já procura pelo index automaticamente */
function App() {
  return (
    <Routes />
  );
}

export default App;





      /* exemplo de contador

        const [counter, setCounter] = useState(0); /* Não é uma variável comum, é um estado
        /** let permite mudar eu mudar o valor da variável
        /** useState => Array [valor, funçãoDeAtualização]
        
        function increment(){
          setCounter(counter + 1);
        };

        return (
          <div>
          <Header>Contador: {counter}</Header>
          <button onClick={increment}>Incrementar</button>
          </div>
        );

        fim de exemplo de contador incremental */