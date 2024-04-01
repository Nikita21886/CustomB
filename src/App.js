import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './index.css';
// import {Card,Navbar,Footer} from './components';
// import {Home,Login,
//   Signup} from './screens';
import Signup from './screens/Signup';
import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
      <div>
        <Routes> 
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/createuser" element={<Signup/>} /> 
        </Routes>
      </div>
    </Router>

    </CartProvider>
    
  );
}

export default App;
