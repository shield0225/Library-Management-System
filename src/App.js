import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListBooks from "./components/booklist";
import CreateBook from "./components/bookcreate";
import UpdateBook from "./components/bookupdate";
import ListPublishers from "./components/publisherlist";
import CreatePublisher from "./components/publishercreate";
import UpdatePublisher from "./components/publisherupdate";
import ListMembers from "./components/memberlist";
import CreateMember from "./components/membercreate";
import UpdateMember from "./components/memberupdate";
import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2 className="offset-md-1">
          <Link to="/books" className="title">
            Library Management System
          </Link>
        </h2>

        <div>
          <Link to="/books" className="ui primary button">
            Books
          </Link>
          <Link to="/publishers" className="ui primary button">
            Publishers
          </Link>

          <Link to="/members" className="ui primary button">
            Members
          </Link>
          <h4 style={{ color: 'red' }}>Only Get, post and delete are working at this time</h4>
        </div>

        <div className="container-for-createbutton">
          <Link
            to="/books/create"
            className="ui secondary button"
            style={{ fontSize: "15px", padding: "10px 20px" }}
          >
            New Book
          </Link>
          <Link
            to="/publishers/create"
            className="ui secondary button"
            style={{ fontSize: "15px", padding: "10px 20px" }}
          >
            New Publisher
          </Link>
          <Link
            to="/members/create"
            className="ui secondary button"
            style={{ fontSize: "15px", padding: "10px 20px" }}
          >
            New Member
          </Link>
        </div>
      </nav>
      <div className="body"></div>
      <Routes>
        <Route path="/books" element={<ListBooks />} />
        <Route path="/books/create" element={<CreateBook />} />
        <Route path="/books/update" element={<UpdateBook />} />
        <Route path="/publishers" element={<ListPublishers />} />
        <Route path="/publishers/create" element={<CreatePublisher />} />
        <Route path="/publishers/update" element={<UpdatePublisher />} />
        <Route path="/members" element={<ListMembers />} />
        <Route path="/members/create" element={<CreateMember />} />
        <Route path="/members/update" element={<UpdateMember />} />
      </Routes>
    </Router>
  );
}

export default App;
