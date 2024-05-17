import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';


function App() {

  return (
    <>
      <Navbar/>  

      <Routes>
        <Route
        path='/'
        element={<Dashboard/>}
        />

        <Route 
        path='/cart'
        element={<Cart/>}
        /> 
        <Route 
        path='/info'
        element={<Info />}
        />

        

      </Routes>
    </>
  )
}

export default App;
