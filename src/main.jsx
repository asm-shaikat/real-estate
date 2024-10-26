import React from 'react'
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
import Home from './pages/Home.jsx';
import EstateDetails from './components/EstateDetails/EstateDetails.jsx';
import Profile from './pages/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Middleware><Root></Root></Middleware>,
    children:[
      { path: "/", element:<Home></Home>},
      { path: "/profile", element:<Profile></Profile>},
      {
        path: '/estate/:Id',
        element: <EstateDetails />,
        loader: async ({ params }) => {
          const response = await fetch('/Data.json');
          const data = await response.json();
          return data.find((estate) => estate.id.toString() === params.Id);
        },
      },
      { path: "/about", element:<About></About>},
      { path: "/contact", element: <Contact></Contact>},
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
