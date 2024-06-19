import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailedArtical from './components/DetailedArtical'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:query' element={<DetailedArtical/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App