import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
      <Helmet><title>Sh-Home</title></Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  )
}

export default App
