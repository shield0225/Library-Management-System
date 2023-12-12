import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react'
import "../styles.css";
import "semantic-ui-css/semantic.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ListPublishers = () => {
  const [APIData, setAPIData] = useState([]);

  const getData = () => {
    axios.get(`http://localhost:8086/api/publishers`).then((response) => {
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
    let { _id, name, address } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Address', address);
}

const onDelete = (id) => {
    axios.delete(`http://localhost:8086/api/publishers/${id}`)
    .then(() => {
        getData();
    })
}

  return (

    <div className="allbooks-box scrollbar">
        <table className="table">
          <thead className="fixed-header">
            <tr>              
              <th className="th text-center">Publisher ID</th>
              <th className="th text-center">Name</th>
              <th className="th text-center">Address</th>
              <th className="th text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          {APIData.map((data) => (
              <tr key={data.id}>
                <td className="td text-center">{data._id}</td>
                <td className="td text-center">{data.name}</td>
                <td className="td text-center">{data.address}</td>
                <td className="td text-center">
                  {/* <Link to='/borrow'>
                        <Button onClick={() => setData(data)} className="ui primary secondary">Borrow</Button>
                    </Link> */}
                    <Link to='/publishers/update'>
                        <Button onClick={() => setData(data)} className="ui primary button">Update</Button>
                    </Link>
                {/* Link to={`/edit/${book._id}`}  */}
                    {/* <Link to={`/edit/${book._id}`} className="btn btn-primary">Edit</Link> */}
                  <Button onClick={() => onDelete(data._id)} className="btn btn-danger">Delete</Button>
                  {/* <Link to={`/details/${book._id}`} className="btn btn-info">Details</Link> */}
                  {/* <button onClick={handlePatch} className="btn btn-secondary">Patch</button> */}
                  {/* <Link to={`/borrow/${book._id}`} className="btn btn-success">Borrow</Link> */} 
            </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* )} */}
    
    </div>
  );
};

export default ListPublishers;
