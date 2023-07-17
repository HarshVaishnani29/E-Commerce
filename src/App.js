import React from 'react'
import Header from './Components/Header/Header';
import Demo from './Components/DEMO/Demo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pabna from './Components/Pabna/Pabna';

function App() {
  return (
   <>
   <BrowserRouter>
   <Pabna/>
   </BrowserRouter>
   {/* <Demo/> */}
   </>
  )
}

export default App

