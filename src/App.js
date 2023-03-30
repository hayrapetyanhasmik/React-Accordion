import './App.css';
import './Accordion';
import Accordion from './Accordion';
import FuncAccordion from './FuncAccordion';
import {Routes,Route} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Accordion />}/>
          <Route path='/functional' element={<FuncAccordion />}/>
      </Routes>
    </div>
  );
}

export default App;
