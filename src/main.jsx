import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Login from './login.jsx'
import Cart from './Cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App/>}/>
      <Route path = "/Login" element = {<Login/>}/>
      <Route path = "/Cart" element = {<Cart/>}/>
    </Routes>
  </BrowserRouter> 
)