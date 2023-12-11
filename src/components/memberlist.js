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
    axios.get(`http://localhost:8086/api/members`).then((response) => {
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
    let { _id, name, address, memb_type, mem_Date, expiry_Date } = data;
    localStorage.setItem('ID', _id);
    localStorage.setItem('Name', name);
    localStorage.setItem('Address', address);
    localStorage.setItem('Memb_Type', memb_type);
    localStorage.setItem('Mem_Date', mem_Date)
    localStorage.setItem('Expiry_Date', expiry_Date)
}

const onDelete = (id) => {
    axios.delete(`http://localhost:8086/api/members/${id}`)
    .then(() => {
        getData();
    })
}

  return (

    <div className="allbooks-box scrollbar">
      {/* {books.length > 0 && ( */}
        <table className="table">
          <thead className="fixed-header">
            <tr>
              <th className="th text-center">Name</th>
              <th className="th text-center">Address</th>
              <th className="th text-center">Membership Type</th>
              <th className="th text-center">Membership Date</th>
              <th className="th text-center">Expiry Date</th>
              <th className="th text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
          {APIData.map((data) => (
              <tr key={data.id}>
                <td className="td">{data.name}</td>
                <td className="td">{data.address}</td>
                <td className="td text-center">{data.memb_type}</td>
                <td className="td text-center">{data.mem_date}</td>
                <td className="td text-center">{data.expiry_date}</td>
                <td><Link to='/borrow'>
                        <Button onClick={() => setData(data)} className="ui primary secondary">Borrow</Button>
                    </Link>
                    <Link to='/update'>
                        <Button onClick={() => setData(data)} className="ui primary button">Update</Button>
                    </Link>
                {/* Link to={`/edit/${book._id}`}  */}
                    {/* <Link to={`/edit/${book._id}`} className="btn btn-primary">Edit</Link> */}
                  <Button onClick={() => onDelete(data.id)} className="btn btn-danger">Delete</Button>
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
