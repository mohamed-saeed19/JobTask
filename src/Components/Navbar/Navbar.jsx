import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/coral.png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bgNav ">
        <Link className="navbar-brand " to="#">
        <img className="mx-5" src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item me-3"  >
              <Link className="nav-link" to="/" style={{ color: 'white' }}>
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item me-3  ">
              <Link className="nav-link"style={{ color: 'white' }} to="about">
                About Us
              </Link>
            </li>
            <li className="nav-item me-3 " >
              <Link
                className="nav-link "
                to="services"
                 style={{ color: 'white' }}
              >
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
