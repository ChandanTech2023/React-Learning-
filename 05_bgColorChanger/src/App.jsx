import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("blue")

  return (
    <>
   <body style={{backgroundColor:color}}>
    
    <div className="container" >
      <button onClick ={()=> setColor("#6af3f3")}
       className="btn " style={{backgroundColor:"#6af3f3"}}>Skyblue</button>
      <button onClick={()=> setColor("#1fe61f")}
       className="btn " style={{backgroundColor:"#1fe61f"}}>Green</button>
      <button onClick={()=> setColor("#0744ee")}
       className="btn " style={{backgroundColor:"#0744ee"}}>Blue</button>
      <button onClick={()=> setColor("#f3a109")}
       className="btn " style={{backgroundColor:"#f3a109"}}>Orange</button>
      <button onClick={()=> setColor("#d80599")}  
      className="btn " style={{backgroundColor:"#d80599"}}>Violate</button>
    </div>
   </body>
    
    </>
  )
}

export default App
