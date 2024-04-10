import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './pages/Home/Home.jsx'
import Resume from './pages/Resume/Resume'
import Transcript from './pages/Transcript/Transcript'
import Projects from './pages/Projects/Projects'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "",
        element: <Home/>, 
      },
      {
        path: "/Resume",
        element: <Resume/>
      },    
      {
        path: "/Transcript",
        element: <Transcript/>
      },    
      {
        path: "/Projects",
        element: <Projects/>
      },
      {
        path: "/Projects.html",
        element: <Projects/>
      },
      {
        path: "*",
        element: <Home/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
