import './App.css';
import Feed from './componentes/Feed/Feed';
import Stories from './componentes/Stories/Stories';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'

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

      <div className='LadoDireito'>
        Lado Direito
      </div>
    </div>
  );
}

export default App;
