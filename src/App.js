import './App.css';
import AjaxHooks from './componentes/AjaxHooks';
import Contador from './componentes/Contador';
import Formularios from './componentes/Formularios';
import RelojHooks from './componentes/RelojHooks';
import ScrollHooks from './componentes/ScrollHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formularios />
        <br />
        <br />
        <br />
        <Contador />
        <br />
        <br />
        <br />
        <ScrollHooks />
        <br />
        <br />
        <br />
        <RelojHooks />
        <br />
        <br />
        <br />
        <AjaxHooks />
        <br />
        <br />
        <br />
      </header>
    </div>
  );
}

export default App;
