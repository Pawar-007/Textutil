import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import About from './component/About.jsx'
import Image from './component/Image.jsx'
const react=createBrowserRouter([
       {
        path:"/",
        element:<App/>,
      },
      {
        path:"/image",
        element:<Image/>,
        children:[
          {
            path:"img",
            element:<About/>
          }
        ]
      },
      {
        path:"/about",
        element:<About/>
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={react}/>
  </React.StrictMode>
)

