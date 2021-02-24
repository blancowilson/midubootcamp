
import './App.css';
import Mensaje from './Mensaje.js';

function App() {
  
  return (
    <div className="App">
      <Mensaje mns='Primer mensaje' color='red' />
      <Mensaje mns='Trabajando desde React' color='green' />
    </div>
  );
}

export default App;
