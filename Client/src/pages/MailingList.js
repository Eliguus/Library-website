import React from "react";
import { Link } from "react-router-dom";
import "../styles/mailinglist.css";

function MailingList() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img class="logo" src={require("../image/976516.png")} alt="logo" width="50px" />
          </Link>
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
                <Link
                  class="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/info">
                  Info
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/mailing">
                  Mailing List
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/login">
                  <button>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="d-flex px-md-5 justify-content-center mt-5 font--large">
          <strong class="h3">Contact information</strong>
        </div>
        <div class="row py-md-5 justify-content-center">
          <div class="col-sm-4 p-4">
            <div class="mail__form">
              <form action="">
                <label for="fname">Full name:</label>
                <input type="text" class="w-100" name="fname" value="" />
                <br />
                <br />
                <label for="lname">Address:</label>
                <input type="text" name="address" class="w-100" value="" />
                <br />
                <br />
                <label for="lname">Phone no:</label>
                <input
                  type="text"
                  name="phone"
                  class="phone w--full"
                  value=""
                />
                <br />
                <br />
                <label for="lname">Email:</label>
                <input
                  type="text"
                  name="email"
                  class="email w--full"
                  value=""
                />
                <br />
                <br />
                <label for="lname">Book name:</label>
                <input type="text" name="book" class="book w--full" value="" />
                <br />
                <br />
                <label for="lname">Date issued:</label>
                <input type="date" name="date" class="date" value="" />
                <br />
                <br />
                <input
                  class="button w--full"
                  name="button"
                  type="submit"
                  value="Rent"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer
        class="text-center text-white"
        style={{ backgroundColor: "#adc178" }}
      >
        <div class=" pt-4">
          <section class="mb-4">
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-facebook-f"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-twitter"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-google"></i>
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-instagram"></i>
            </a>

            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-linkedin"></i>
            </a>
            <a
              class="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div
          class="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            bannet7.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default MailingList;
