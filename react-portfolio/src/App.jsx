import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Page Components
import Header from './components/Header'
import Footer from './components/Footer'
import Background from './components/Background'

// Pages Routes
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Background/>
      <Routes>
        <Route path='/' element={<About/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
