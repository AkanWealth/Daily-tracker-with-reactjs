import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul
              className="navbar-nav"
              style={{ marginLeft: "auto", marginRight: "5rem" }}
            >
              <li className="navbar-item">
                <Link className="nav-link" to="/">
                  Exercises
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/create">
                  Create Execise Log
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/user">
                  Create User
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
