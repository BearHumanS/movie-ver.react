import React from 'react'
import Home from './routes/Home'
import About from './routes/About'
import Nav from './components/Nav'
import TheFooter from './components/TheFooter'
import './App.css'
import { Reset } from 'styled-reset'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  )
}
export default App
