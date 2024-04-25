import Home from "../pages/Home";
import React from 'react';
import Services from '../pages/Services';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import DoctorsDetails from '../pages/Doctors/DoctorsDetails';



import {Routes, Route} from 'react-router-dom'
const Routers = () => {
  return <Routes>
    <Routes path="/" element={<Home/>} />
    <Routes path="/home" element={<Home/>} />
    <Routes path="/doctors" element={<Doctors/>} />
    <Routes path="/doctors/:id" element={<DonctorDetails/>} />
    <Routes path="/login" element={<Login/>} />
    <Routes path="/register" element={<Signup/>} />
    <Routes path="/contact" element={<Contact/>} />
    <Routes path="/services" element={<Services/>} />
  </Routes>
};

export default Routers;