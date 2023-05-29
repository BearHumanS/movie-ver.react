import React from 'react'
import Home from './routes/Home'
import About from './routes/About'
import NotFound from './routes/NotFound'
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
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
        <TheFooter />
      </BrowserRouter>
    </>
  )
}
export default App
