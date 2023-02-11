import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({setIsLoggedIn}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginForm = (e) => {
    e.preventDefault();

    const data = { email: email, password: password };
    axios
      .post("http://localhost:3001/users/login", data)
      .then((res) => {
        setIsLoggedIn(res.data.token !== null ? true : false);
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard")
      })
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (
      (localStorage.getItem("token") !== "") &
      (localStorage.getItem("token") !== null)
    ) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("token")]);

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
                <Link class="nav-link active" to="/login">
                  <button>Login</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container-fluid">
        <img src={require("../image/login-bg.jpg")} alt="image" />
        <div class="login__container mb-5">
          <form class="login__form " onSubmit={loginForm}>
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                class="form-control"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label class="form-label" for="form2Example1">
                Email address
              </label>
            </div>

            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                class="form-control"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label class="form-label" for="form2Example2">
                Password
              </label>
            </div>

            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form2Example31"
                    checked
                  />
                  <label class="form-check-label" for="form2Example31">
                    Remember me
                  </label>
                </div>
              </div>

              <div class="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <input type="submit" value="Sign in" />

            <div class="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-facebook-f"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-twitter"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fab fa-github"></i>
              </button>
            </div>
          </form>
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

export default Login;
