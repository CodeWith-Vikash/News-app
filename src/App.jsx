import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DetailedArtical from './components/DetailedArtical'
import ScrollToTop from './components/ScrollToTop'
import SearchPage from './components/SearchPage'
import ErrorPage from './components/ErrorPage'
import CategoryPage from './components/CategoryPage'
import Favourites from './components/Favourites'

const App = () => {
  return (
    <BrowserRouter>
     <ScrollToTop/>
      <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/details/:query' element={<DetailedArtical/>}/>
          <Route path='/search/:query' element={<SearchPage/>}/>
          <Route path='/category' element={<CategoryPage/>}/>
          <Route path='/favourites' element={<Favourites/>}/>
          <Route path='*' element={<ErrorPage/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App