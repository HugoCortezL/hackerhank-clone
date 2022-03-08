import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/Login'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/login" element={<LogIn/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
