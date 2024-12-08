import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
     {/* <h1 className='bg-slate-500 text-center p-4'>React Router </h1> */}
     <Header/>
     <Outlet/>

     <Footer/>
    </>
  )
}

export default App
