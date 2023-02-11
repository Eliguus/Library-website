import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutText from "../components/AboutText";
import Footer from "../components/Footer";

function About() {
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
              <li class="nav-item active">
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


      <div class="container-fluid mt-5 py-5">
        <div class="d-flex flex-column justify-content-center px-5">
          <h2>Our vision</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            optio. Amet illum animi accusantium vero, dolor minima qui cum
            veritatis, modi sapiente deserunt ex, velit sit tempora voluptas est
            recusandae iusto. Maxime, officiis aut magnam, earum sunt
            necessitatibus eveniet eaque odit illum autem dolores delectus
            ducimus voluptatem, impedit consequuntur rem commodi error soluta
            totam odio beatae laboriosam non veniam. Nihil ipsa tempore commodi
            alias aut architecto, fugit rerum repudiandae quos, adipisci autem
            repellat aspernatur, deserunt accusamus temporibus! Officiis amet
            nam temporibus assumenda tempore! Corporis obcaecati dolor nesciunt
            sequi laudantium dignissimos magni, doloremque tenetur nobis nemo
            consectetur aliquam temporibus natus autem perspiciatis reiciendis
            illum maxime error voluptas rem. Est hic mollitia quam esse
            inventore provident accusamus unde. Veritatis alias deserunt aperiam
            explicabo distinctio quidem debitis, a itaque totam incidunt
            repellat, deleniti iure asperiores adipisci iusto nihil nobis dolor.
            Rem, temporibus quae eveniet deleniti illo dolorum.
          </p>
          <div class="flex">
            <video width="320" height="240" controls>
              <source src={require("../image/my-video.mp4")} type="video/mp4" />
            </video>
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

export default About;
