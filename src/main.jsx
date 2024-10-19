import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './Template/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import Register from './pages/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Middleware from './middleware.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Middleware><Root></Root></Middleware>,
    children:[
      { path: "/about", element: <Middleware><About></About></Middleware>},
      { path: "/contact", element: <Middleware><Contact></Contact></Middleware>},
    ],
  },
  {
    path: "register",
    element: <Register></Register>
  },
  {
    path: "login",
    element: <Login></Login>
  }
]);


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
