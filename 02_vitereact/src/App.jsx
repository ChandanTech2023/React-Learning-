import { useState } from 'react'

function App() {
  const user = "Chandan Kumar "
 return(
  <>
   <h1> Learn React Concepts </h1>  
   <h3>Chai Aur React with vite | {user} </h3>
   <div className="header">
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
   
  </>
 )
  
}

export default App
