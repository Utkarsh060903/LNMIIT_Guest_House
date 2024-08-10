import Navbar from './Components/Navbar/Navbar'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Form from './Pages/Form/Form'
import Availability from './Pages/Availability/Availability'
import AboutUs from './Pages/AboutUs/AboutUs'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { UserProvider } from './UserContext'
import FacultyForm from './Pages/FacultyForm/FacultyForm'
import FacultyLogin from './Components/FacultyLogin/FacultyLogin'
import FacultyRegister from './Components/FacultyRegister/FacultyRegister'

const App = () => {
  return (
    <UserProvider>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/facultyform' element={<FacultyForm />} />
        <Route path='/availability' element={<Availability />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/login/student' element={<Login />} />
        <Route path='/register/student' element={<Register />} />
        <Route path='/register/faculty' element={<FacultyRegister />}/>
        <Route path='/login/faculty' element={<FacultyLogin />}/>
      </Routes>
    </div>
    </UserProvider>
  )
}

export default App
