import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route,RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'

//!st method of routing
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// 2nd way or New way for route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//   <Routes>
//    <Route path='' element={<App/>}/>
//     <Route path='about' element={<About />} />
//     <Route path='header' element={<Header />} />
//     <Route path='home' element={<Home />} />
//     <Route path='contact' element={<Contact />} />
//     <Route path='footer' element={<Footer />} />
//     <Route path='user/:userid' element={<User />} />
//     <Route path='github' element={<Github />}/>
//   </Routes>
//   </BrowserRouter>
  
// )