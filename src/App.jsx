import { useState } from 'react'
import About from './pages/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from '../src/pages/Home'
import Welcome  from '../src/pages/Welcome'
import Reservation from "./pages/Reservation";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <BrowserRouter>
 <Routes>
 
<Route path='/' element={<About/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path="/register" element={<Register />}></Route>
<Route path="/Home" element={<Home />}></Route>
<Route path="/Welcome" element={<Welcome/>}></Route>
<Route path="/reservation" element={<Reservation />} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
