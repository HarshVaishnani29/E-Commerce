import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../AboutUS/About'
import Blog from '../Blog/Blog'

function Pabna() {
  return (
    <>
  <Header />
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/> 
        <Route path="/Blog" element={<Blog/>}/> 
    </Routes>
    </>
  )
}

export default Pabna