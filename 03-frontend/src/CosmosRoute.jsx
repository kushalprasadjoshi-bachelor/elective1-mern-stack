import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './component/About'
import Product from './component/Product'
import Contact from './component/Contact'
import Login from './component/Login'

const CosmosRoute = () => {
  return (
    <Routes>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/product/:id1/name/:id2" element={<Product></Product>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  )
}

export default CosmosRoute