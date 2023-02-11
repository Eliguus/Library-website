import React, { useState } from "react";
import "../styles/sidebars.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function EditBook({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const location = useLocation();

  const book = location.state.book;


  const [bookTitle, setBookTitle] = useState(book.title);
  const [bookAuthor, setBookAuthor] = useState(book.author);
  const [genre, setGenre] = useState(book.genre);
  const [bookDescription, setBookDescription] = useState(book.description);
  const [publisher, setPublisher] = useState(book.publisher);
  const [publicationYear, setPublicationYear] = useState(book.year);
  const [bookPrice, setBookPrice] = useState(book.price);
  const [pagesNumber, setPages] = useState(book.pages);
  const [bookStatus, setBookStatus] = useState(book.status);
  const [bookCoverImage, setCoverImage] = useState("");


  // response message
  const [message, setMessage] = useState("");
  // const [email, setEmail] = useState("");

  let handleBookEdit = async (e) => {
    e.preventDefault();

    try {
      const fd = new FormData();

      if (bookCoverImage !== "") {
        fd.append("file", bookCoverImage, bookCoverImage.name);
      }

      fd.append("title", bookTitle);
      fd.append("author", bookAuthor);
      fd.append("genre", genre);
      fd.append("description", bookDescription);
      fd.append("publisher", publisher);
      fd.append("pages", pagesNumber);
      fd.append("year", publicationYear);
      fd.append("price", bookPrice);
      fd.append("status", bookStatus);

      console.log(localStorage.getItem("token"), "token");
      axios
        .put(`http://localhost:3001/books/${book.id}`, fd, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          setBookAuthor("");
          setBookDescription("");
          setBookPrice("");
          setBookTitle("");
          setMessage("User created successfully");

          navigate("/dashboard");
        })
        .catch((err) => console.log(err));

      // let resJson = await res.json();

      // if (res.status === 200) {
      //   setBookAuthor("");
      //   setBookDescription("");
      //   setBookPrice("");
      //   setBookTitle("");
      //   setMessage("User created successfully");
      // } else {
      //   setMessage("Some error occured");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    console.log(localStorage.getItem("token"));
    localStorage.setItem("token", "");
    setIsLoggedIn(false);
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
                className="nav-link link-dark"
                aria-current="page"
              >
                <svg className="bi me-2" width="16" height="16">
                  <use xlinkHref="#home" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-new-book" className="nav-link">
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

        <div className="col-8 p-3 px-5 mt-3">
          <div className="success-message h4">{message}</div>
          <div className="mb-2 h3">Add New Book</div>

          <form className="col-8" onSubmit={handleBookEdit}>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Book Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={bookTitle}
                value={bookTitle}
                onChange={(e) => setBookTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlhtmlFor="exampleFormControlInput1">Book Author</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={bookAuthor}
                placeholder={bookAuthor}
                onChange={(e) => setBookAuthor(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Publisher</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={publisher}
                value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Publication Year</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={publicationYear}
                value={publicationYear}
                onChange={(e) => setPublicationYear(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Category</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                placeholder={genre}
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              >
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Fiction">Fiction</option>
                <option value="Relegious">Relegious</option>
                <option value="Biblography">Biblography</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Price</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={bookPrice}
                value={bookPrice}
                onChange={(e) => setBookPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Pages</label>
              <input
                type="number"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder={pagesNumber}
                value={pagesNumber}
                onChange={(e) => setPages(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder={bookDescription}
                value={bookDescription}
                onChange={(e) => setBookDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlSelect1">Status</label>
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={(e) => setBookStatus(e.target.value)}
                value={bookStatus}
              >
                <option value="available">Available</option>
                <option value="rented">Rented</option>
              </select>
            </div>

            <div className="form-group mt-2">
              <label htmlFor="exampleFormControlFile1" className="mr-3">
                Upload Cover Image
              </label>
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                placeholder={bookCoverImage}
                onChange={(e) => setCoverImage(e.target.files[0])}
              />
            </div>
            <input
              type="submit"
              value="Edit Book"
              className="mt-3 btn-primary px-3"
            />
          </form>
        </div>
      </div>
      <script src="./sidebars.js"></script>
    </>
  );
}

export default EditBook;
