import { useState } from 'react'
import './App.css'
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route index element={<Post/>}/>
    <Route path={'/login'} element={<Post/>}/>
  </Routes>  
  
  );
}

export default App
