// import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";
import ActiveLink from "../../Home/ActiveLink/ActiveLink";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((err) => console.log(err.message));
  };
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><ActiveLink to="/">Home</ActiveLink></li>

              <li>
                <ActiveLink to="/blogs">Blog</ActiveLink>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className="btn  .btn-active p-2 normal-case rounded-sm text-xl hover:text-cyan-400 .active:bg-white focus:outline-none focus:ring focus:text-white"
          >
            <span className="text-info pe-1 font-medium"> Chef</span>{" "}
            <button className=".btn .btn-info bg-contain bg-info .rounded-md text-white p-0.5 ms-1">
              corner
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>

            <li>
              <ActiveLink to="/blogs">Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <FaUserCircle className="mr-3" style={{ fontSize: "2rem" }} />
          {user ? (
            <Link
              to="/"
              className=" btn-active font-medium hover:text-sky-400 rounded-sm p-2.5 m-0"
              onClick={handleLogOut}
            >
              logOut
            </Link>
          ) : (
            <Link
              to="/login"
              className=" btn-active font-medium hover:text-sky-400 rounded-sm p-2.5 m-0"
            >
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
