import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useState } from 'react'

function FavoriteColor() {
  let [color , setColor] = useState ("Blue");
  return <h1>My favorite color is : {color}!</h1>
}
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <FavoriteColor/>
  </StrictMode>
)
