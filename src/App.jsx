import React from 'react'
import Body from './Body'
import Header from './Header'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Showdetails from './Showdetails'

const App = () => {
   const [show,setShow] = useState([])

  return (
    <BrowserRouter>
      <Header show={show} />
      <Routes>
        <Route path='/' element={<Body  show={show} setShow={setShow}/>} />
        <Route path='/show/:id' element={<Showdetails show={show} setShow={setShow} />} />

      </Routes>
</BrowserRouter>
  )
}

export default App
