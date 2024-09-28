import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Myapp from './title.jsx'

// You can use createElement which is default injected by Babble transcompiler , here is the syntax
const username = "Awesome React"
 const reactele = React.createElement(
  "div",{
    className: 'mypara' 
  }, 'React is a Library .',
   username // at the end we can add Evaluted expression 
 )

createRoot(document.getElementById('root'))
.render(
  // reactele,
  <>
  
  <App />
{/* Jsx syntax har react ek bundler use krta hai like babble jo backend me syntax thik krta hai */}
  <Myapp/> 

  </>
)
 