import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//HTML dentro do Js => JSX 

/*
===PILARES DO REACT===

react #1 => tudo é componente, peças que, juntas, formam a aplicação;

react #2 => propriedades são informações passadas para funções que modificam
o comportamento da mesma;

react #3 => estado seria manter uma informação variavel dentro do componenete.
(seria algo como o let ou const no JS)
*/