import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Helmet } from "react-helmet"
import Footer from "../components/Footer"

function App() {

  return (
    <>
      <Helmet><title>Sh-Home</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
      <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
