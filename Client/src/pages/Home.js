import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-success">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img
              class="logo"
              src={require("../image/976516.png")}
              alt="logo"
              width="50px"
            />
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
                <Link class="nav-link active" aria-current="page" to="/">
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

      <div
        id="intro-example"
        class="p-5 d-flex align-items-center text-center bg-image"
        style={{ backgroundImage: `url(${require("../image/bg-hero.jpg")})` }}
      >
        <div class="mask">
          <div class=" h-100">
            <div class="text-white">
              <h1 class="mb-3 text--lg">A book is a gift</h1>
              <h3 class="mb-4">that you can open again and again !</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="container py-5 mx-auto">
        <div class="w-full text-center mx-auto py-5 font--large">
          <strong className="h2">Top Rated Books</strong>{" "}
        </div>
        <div class="row">
          {books.length > 0 ? (
            books.map((book) => (
              <div
                class="col-lg-3 col-md-4 col-sm-6 col-6"
                style={{ marginBottom: "120px" }}
              >
                <div class="card shadow-sm">
                  <img
                    class="bd-placeholder-img card-img-top"
                    width="100%"
                    height="200"
                    src={`http://localhost:3001/images/${book.img_url}`}
                    alt={`${book.img_url}`}
                  />
                  <div class="card-body bg-white">
                    <p class="card-text">{book.title}</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          class="btn btn-sm btn-outline-secondary"
                        >
                          Borrow
                        </button>
                      </div>
                      <small class="text-muted">{book.price}Br.</small>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="w-100 text-center ">
              <p className="display-6 text-muted">No content</p>
            </div>
          )}
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
        ={" "}
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

export default Home;
