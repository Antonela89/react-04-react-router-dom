import './App.css';
import Contactos from './components/Contactos';
import Inicio from './components/Inicio';
import { Routes, Route }  from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='contactos' element={<Contactos/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
