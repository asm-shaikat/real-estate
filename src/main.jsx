import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Template/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './pages/about.jsx';
import Contact from './pages/Contact.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      { path: "/about", element: <About></About>},
      { path: "/contact", element: <Contact></Contact>},
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
