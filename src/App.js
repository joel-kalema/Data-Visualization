import React, { useState, useEffect } from 'react';
import Header from './componets/heder';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './componets/home';
import Details from './componets/details';
import './App.css';
import Control from './componets/controle';
import Statistics from './componets/statistics';
import Details01 from './componets/details01';
import Login from './componets/login';
import SignUp from './componets/signUp';




function App() {
  const [state, setState] = useState({
    name: '',
    email: '',
    token: '',

  })
   const navigate = useNavigate();
  

  useEffect(() => {
    const token = localStorage.getItem('appToken')
    if (token) {
      navigate('/')
      setState({token})
    }
    else {
      navigate('/login')
    }

  }, [])

  
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/controle' element={ <Control />} />
          <Route path='/statistics' element={ <Statistics /> } />
          <Route path='/machine/:id' element={ <Details /> } />
          <Route path='/machine01/:id' element={ <Details01 /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/signUp' element={ <SignUp /> } />
        </Routes>
    </div>
  );
}

export default App;
