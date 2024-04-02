import { useState } from 'react'
import './App.css'
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Indexpage from './pages/Indexpage';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Indexpage/>}/>
    <Route path={'/login'} element={<Login/>}/>
<Route path={'/register'} element={<Register/>}/>
    </Route>
  </Routes>  
  
  );
}

export default App
