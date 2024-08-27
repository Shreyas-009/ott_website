import React from 'react'
import {Route , Router} from "react-router-dom"
import Home from '../pages/Home'
import Category from '../pages/Category'

const Routers = () => {
  return (
    <Router>
        <Route to={"/"} element={<Home/>}/>
        <Route to={"/category"} element={<Category/>}/>
    </Router>
  )
}

export default Routers