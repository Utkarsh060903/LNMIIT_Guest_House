import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Sidebar from './Components/Sidebar/Sidebar'
import InfoPage from './Pages/InfoPage/InfoPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/info' element={<InfoPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
