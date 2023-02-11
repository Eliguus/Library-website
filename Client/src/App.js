import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Login from "./pages/Login";
import MailingList from "./pages/MailingList";

import Dashboard from "./pages/Dashboard";
import AddNewBook from "./pages/AddNewBook";
import EditBook from "./pages/EditBook";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToken, setIsToken] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log(localStorage.getItem("token"), "TOKEN");
    if (
      (localStorage.getItem("token") !== "") &
      (localStorage.getItem("token") !== null)
    ) {
      console.log(localStorage.getItem("token"), "TOKEN");
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [localStorage.getItem("token")]);

  useEffect(() => {
    fetch("http://localhost:3001/books")
      .then((res) => res.json())
      .then((json) => {
        setBooks(json);
        console.log(json, "JSON");
      });
  }, []);

  return (
    <div>
      <BrowserRouter>
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Dashboard setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/dashboard" element={<Dashboard setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/add-new-book" element={<AddNewBook setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/edit-book/:id" element={<EditBook setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        ) : (
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/mailing" element={<MailingList />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
