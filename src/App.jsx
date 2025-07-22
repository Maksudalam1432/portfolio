import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/h'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/about' element={<about />} />
        <Route path='/contact' element={<contact />} />
        <Route path='/skills' element={<skills />} />
        <Route path='/resume' element={<resume/>} />
        <Route path='/portfolio' element={<portfolio/>} />
      </Routes>
    </>
  )
}

export default App
