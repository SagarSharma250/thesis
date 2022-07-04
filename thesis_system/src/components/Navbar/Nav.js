import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Nav.css";
//import icons from react-icons
import { FaSearch } from "react-icons/fa";


export default function Nav() {
  return (
      <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Pulchowk Campus
          </a>
          <ul className="Nav-items">
            <li className="Nav-links">
              <NavLink to="/student">
                <button className="btn btn-secondary">Add Students</button>
              </NavLink>
            </li>
            <li className="Nav-links">
              <NavLink to="/studentlist">
                <button className="btn btn-secondary">Student list</button>
              </NavLink>
            </li>
            <li className="Nav-links">
              <NavLink to="/search">
                <FaSearch size={30} />
              </NavLink>
            </li>
            <li className="Nav-links">
              <NavLink to="/resultlist">
                <button className="btn btn-secondary">Result List</button>
              </NavLink>
            </li>
            <li className="Nav-links">
              <NavLink to="/admin">
                <button className="btn btn-secondary">Admin</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>  
  );
}
