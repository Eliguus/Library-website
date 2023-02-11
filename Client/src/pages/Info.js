import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Info() {
  const [availableBooks, setAvailableBooks] = useState([]);
  const [rentedBooks, setRentedBooks] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((json) => {
        const available = json.filter((book) => book.status === "available");
        const rented = json.filter((book) => book.status === "rented");
        setAvailableBooks(available);
        setRentedBooks(rented)
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
                <Link class="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/info">
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

      <div class="container px-5 py-5">
        <div class="row">
          <div class="col-sm-4">
            <h3>Genres</h3>
            <br />
            <input
              for="#gospel"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label id="gospel">Spritual</label>
            <br />
            <br />
            <input
              id="Fiction"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label for="#Fiction">Fiction</label>
            <br />
            <br />
            <input
              id="Non-fiction"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label for="#Non-fiction">Non-fiction</label>
            <br />
            <br />
            <div class="flex">
              <input id="Poetry" type="checkbox" value="" />
              <label for="#Poetry">Poetry</label>
              <br />
              <br />
            </div>
          </div>

          <div class="col-sm-4">
            <h3>Publication Year</h3>
            <br />
            <input id="pi_input" type="range" min="1900" max="2023" step="10" />
            <p>From: 1900</p>
            <p>
              To: <output id="value"></output>
            </p>
          </div>

          <div class="col-sm-4">
            <h3>Authros</h3>
            <input
              id="author1"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label for="#author1">Addis Alemayehu</label>
            <br />
            <br />
            <input
              id="author2"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label for="#author2">Behalu Girma</label>
            <br />
            <br />
            <input
              id="author3"
              type="checkbox"
              class="fname"
              name="fname"
              value=""
            />
            <label for="#author3">James Bond</label>
            <br />
            <br />

            <br />
          </div>
        </div>
      </div>
      <hr />

      <div class="container py-5 mx-auto">
        <div class="w-full text-center mx-auto py-5 font--large">
          <strong className="h2">Available Books</strong>
        </div>
        <div class="row">
          {availableBooks.length > 0 ? (
            availableBooks.map((book) => (
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

      <div class="container py-5 mx-auto">
        <div class="w-full text-center mx-auto py-5 font--large">
          <strong className="h2">Rented Books</strong>
        </div>
        <div class="row">
          {rentedBooks.length > 0 ? (
            rentedBooks.map((book) => (
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

      <br />
      <br />
      <br />
      <div class="container search-box">
        <form action="" class="search-bar">
          <input
            class="search-txt"
            type="text"
            name=""
            placeholder="search for an audio"
            style={{ width: "50%", height: "30px" }}
          />
          <input
            class="button"
            type="submit"
            name=""
            value="search"
            style={{ height: "30px" }}
          />
        </form>
        <br />
        <br />
        <br />
        <br />
        <br />
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

export default Info;
