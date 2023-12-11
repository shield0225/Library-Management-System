import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import "../styles.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ListBooks = () => {
  const [APIData, setAPIData] = useState([]);
  
  const getData = () => {
    axios.get(`http://localhost:8086/api/books`).then((response) => {
      setAPIData(response.data);
    }).catch(error => {
      console.error("Error fetching data:", error);
    });
  };

  useEffect(() => {
    getData();
  }, []); 

  const setData = (data) => {
    console.log(data);
    let { _id, title, authors, price, available, publisher_id } = data;
    localStorage.setItem("ID", _id);
    localStorage.setItem("Title", title);
    localStorage.setItem("Authors", authors);
    localStorage.setItem("Price", price);
    localStorage.setItem("Available", available);
    localStorage.setItem("Publisher_id", publisher_id);
  };

  const onDelete = (_id) => {
    axios.delete(`http://localhost:8086/api/books/${_id}`)
      .then(() => {
        getData(); 
      })
      .catch(error => {
        console.error("Delete error:", error);
      });
  };

  const navigate = useNavigate();
  const handleClick = (data) => {
    setData(data);
    navigate("/borrow");
  };

  return (
    <div className="allbooks-box scrollbar">
      <table className="table">
        <thead className="fixed-header">
          <tr>
            <th className="th text-center">Title</th>
            <th className="th text-center">Authors</th>
            <th className="th text-center">Price</th>
            <th className="th text-center">Available</th>
            <th className="th text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {APIData.map((data) => (
            <tr key={data._id}>
              <td className="td">{data.title}</td>
              <td className="td">{data.authors}</td>
              <td className="td text-center">{data.price}</td>
              <td className="td text-center">{data.available}</td>
              <td>
                <Button
                  onClick={() => handleClick(data)}
                  className="ui primary secondary"
                  disabled={data.available === 0}
                >
                  Borrow
                </Button>
                <Link to="/books/update">
                  <Button
                    onClick={() => setData(data)}
                    className="ui primary button"
                  >
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => onDelete(data._id)}
                  className="btn btn-danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* )} */}
    </div>
  );
};

export default ListBooks;
