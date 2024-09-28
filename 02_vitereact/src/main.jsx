import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Myapp from './title.jsx'

createRoot(document.getElementById('root'))
.render(
  <StrictMode>
    <App />

    {/*Jsx syntax har react ek bundler use krta hai like babble jo backend me syntax thik krta hai */}
    <Myapp/> 
  </StrictMode>
)
 