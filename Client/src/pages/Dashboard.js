import React, { useState, useEffect } from "react";
import "../styles/sidebars.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
      });
  }, []);

  const logoutHandler = () => {
    navigate("/");
    localStorage.setItem("token", "");
    setIsLoggedIn(false);
  };

  const deleteBook = (id) => {
    axios
      .delete(`http://localhost:3001/books/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        fetch("http://localhost:3001/books")
          .then((res) => res.json())
          .then((json) => {
            setBooks(json);
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row">
        <div
          className="d-flex col-4 flex-column flex-shrink-0 p-3 bg-light"
          style={{ width: "280px", height: "90vh" }}
        >
          <Link
            to="/dashboard"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap" />
            </svg>
            <span className="fs-4">Bookstore</span>
          </Link>
          <hr></hr>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link active"
                aria-current="page"
              >
                <svg className="bi me-2" width="16" height="16">
                  <use xlinkHref="#home" />
                </svg>
                Home
              </Link>
            </li>

            <li>
              <Link to="/add-new-book" className="nav-link link-dark">
                <svg className="bi me-2" width="16" height="16">
                  <use xlinkHref="#table" />
                </svg>
                Add New Book
              </Link>
            </li>
          </ul>
          <hr></hr>
          <button className="btn btn-primary" onClick={() => logoutHandler()}>
            Logout
          </button>
        </div>
        <div className="col p-3 px-5 mt-3">
          <div className="mb-2 h3">Manage Books</div>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {books.length > 0 ? (
                books.map((book) => (
                  <tr key={book.id}>
                    <td>
                      <img
                        style={{ width: "40px", height: "40px" }}
                        src={`http://localhost:3001/images/${book.img_url}`}
                        alt={`${book.img_url}`}
                      />
                    </td>

                    <td className="h6">{book.title}</td>
                    <td className="h6">{book.author}</td>
                    <td>
                      {book.status == "available" ? (
                        <span
                          className="bg-success rounded-pill p-1 px-2"
                          style={{ width: "100px" }}
                        >
                          Available
                        </span>
                      ) : (
                        <span
                          className="bg-warning rounded-pill p-1 px-2"
                          style={{ width: "100px" }}
                        >
                          Rented
                        </span>
                      )}
                    </td>
                    <td>
                      <span
                        className="bg-warning rounded-pill p-1 px-3"
                        style={{ width: "100px" }}
                        onClick={() =>
                          navigate(`/edit-book/${book.id}`, {
                            state: {
                              book: book,
                            },
                          })
                        }
                      >
                        Edit
                      </span>
                      <span className="mx-1"></span>
                      <span
                        className="bg-danger rounded-pill p-1 px-3"
                        style={{ width: "100px" }}
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <div className="w-100 text-center ">
                  <p className="display-6 text-muted">No content</p>
                </div>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <script src="./sidebars.js"></script>
    </>
  );
}

export default Dashboard;
