import React from "react";
import { Link } from "react-router-dom";

function Contact() {
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
                <Link class="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/mailing">
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

      <div class="container mt-5">
        <div class="d-flex">
          <h3 class="h5 pt-5">Get in touch</h3>
        </div>
        <div class="row  py-md-5 px-md-5 justify-content-center">
          <div class=" col-sm-4 p-4">
            <form action="px-md-5">
              <label for="fname">Full name:</label>
              <br />
              <input
                class="w-100"
                type="text"
                id="fname"
                name="fname"
                value=""
                required
              />
              <br />
              <label for="Email" class="mt-3">
                Email address:
              </label>
              <br />
              <input class="w-100" type="text" value="" required />
              <br />
              <br />
              <label>Your message</label>
              <br />
              <br />
              <textarea name="message" rows="10" class="w-100"></textarea>
              <br />
              <br />
              <input
                class="bg-success w-50 mx-sm-auto"
                type="submit"
                name="button"
                value="Submit"
              />
            </form>
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

export default Contact;
