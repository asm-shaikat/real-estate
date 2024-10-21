import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Helmet } from "react-helmet"

function App() {

  return (
    <>
      <Helmet><title>Sh-Home</title></Helmet>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <Outlet></Outlet>
      </div>
    </>
  )
}

export default App
