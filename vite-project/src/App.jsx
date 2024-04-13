import { createContext,useState } from 'react'
import './App.css'
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Indexpage from './pages/Indexpage';
import Login from './pages/Login';
import Register from './pages/Register';
import {UserContextProvider} from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
function App() {
  return (
    <UserContextProvider>
 <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Indexpage/>}/>
    <Route path={'/login'} element={<Login/>}/>
<Route path={'/register'} element={<Register/>}/>
<Route path={'/create'} element={<CreatePost/>}/>
<Route path={'/post/:id'} element={<PostPage/>}/>
    </Route>
  </Routes>  
    </UserContextProvider>
 
  
  );
}

export default App
