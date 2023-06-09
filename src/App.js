import React from "react";
import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'
import LadoDireito from './componentes/LadoDireito/LadoDireito'

function App() {
  return (
    <div className="App">
      <LadoEsquerdo />

      <div className='Centro'>
        {/* <div className='Stories'></div> The bug*/}
        <Stories />
        <Feed />
        {/* <div className='Feed'>Feed</div> */}
      </div>

      <LadoDireito />
    </div>
  );
}

export default App;
