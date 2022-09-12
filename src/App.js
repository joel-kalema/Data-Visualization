import Header from './componets/heder';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componets/home';
import Details from './componets/details';
import './App.css';
import Control from './componets/controle';
import Statistics from './componets/statistics';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/controle' element={ <Control />} />
          <Route path='/statistics' element={ <Statistics /> } />
          <Route path='/machine/:id' element={ <Details /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
