import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import AddData from '../pages/AddData';
import ShowData from '../pages/ShowData';

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/adddata' element={<AddData/>}/>
            <Route path='showdata' element={<ShowData/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default Routing
