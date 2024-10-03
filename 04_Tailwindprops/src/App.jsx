import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {

  let myArr ={
    username : "Chandan" ,
    repoCount: 20
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind test</h1>
      
      <Card/>
      <Card username ="chai aur code" obj ={myArr}/>
      <Card username= " chandan" btnText = "Click me"/>
    </>
)
}
export default App
