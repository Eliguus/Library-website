import React from 'react'
import "../styles/style.css";

function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-md navbar-dark fixed-top bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html">
        <img class="logo" src={require("../image/976516.png")} alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarCollapse"
      >
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="index.html">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="info.html">
              Info
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">
              Contact
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="about.html">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="mailinglist.html">
              Mailing List
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">
              <button>Login</button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar