import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from '../../firebase.config';
import Swal from "sweetalert2";

const Navbar = () => {
  const { loginUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut(auth)
          .then(() => {
            Swal.fire("Logged Out!", "You have been logged out.", "success");
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  
  const navList = (
    <>
      <li className="block lg:inline-block">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="block lg:inline-block">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="block lg:inline-block">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            {navList}
          </ul>
        </div>
        <p className="font-semibold text-xl">
          <NavLink to="/">Skyline Homes</NavLink>
        </p>
      </div>

    {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navList}</ul>
      </div>


      <div className="navbar-end">
        {!loginUserInfo ? (
          <>
            <NavLink to="/login">
              <button className="btn btn-success text-white mr-2">Login</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn btn-info text-white">Register</button>
            </NavLink>
          </>
        ) : null}

        {loginUserInfo && (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="{loginUserInfo.photoURL ? loginUserInfo.photoURL : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'}"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              <li>
                <NavLink className="justify-between" to="/profile">
                  Profile
                  <span className="badge">New</span>
                </NavLink>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
