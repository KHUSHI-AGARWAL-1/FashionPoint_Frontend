import React from 'react'
import Home from './home/Home'
import Products from './Products/Products'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './Components/Signup'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import About from './Components/About'
import Contact from './Components/Contact'
const App = () => {
  const [authuser,setauth]=useAuth();
  console.log(authuser)
  return (
<>
<div className='dark:bg-slate-900 dark:text-white '>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/products' element={authuser? <Products/>: <Navigate to="/signup"/>} />
<Route path='/signup' element={<Signup/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
</Routes>
<Toaster/>
</div>

</>
  )
}

export default App