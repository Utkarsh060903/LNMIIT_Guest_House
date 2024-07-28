import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Form from './Pages/Form/Form'
import Availability from './Pages/Availability/Availability'
import AboutUs from './Pages/AboutUs/AboutUs'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/availability' element={<Availability />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
