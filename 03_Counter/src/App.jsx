import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Here we see that counter is updating but not reflect at same time on different position in UI.Now Hooks comes into picture. 
  // let counter =1 ;
  // const addValue = ()=> {
  //   console.log("Value added" , counter)
  //   counter+= 1;
  //Solution --> 
  let count =0;
  let [counter , setcounter] =useState(count) // pass variable and function 
  const addValue = ()=>{
    if (counter == 20) {
      setcounter(counter =20)
    }else{
      counter= counter+ 1;
      setcounter(counter)
    }
  } 

  const Remove =()=>{
    if (counter <= 0) {
      setcounter(counter =0)
    }else{
      setcounter(counter -1)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Couner value : {counter}</h2>
      <div className="card">
        <button  id='btn' onClick={addValue}>Add value : {counter}</button>
        <button onClick={Remove}>Remove value: {counter}</button>
        <p>
        Here we are using the <b>useState</b> Hook to keep track of the application state.
        State generally refers <br/> to application data or properties that need to be tracked.so hooks cannot work in class component.

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
