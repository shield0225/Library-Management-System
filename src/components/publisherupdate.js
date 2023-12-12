import React, { useEffect, useState, postData } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

function UpdatePublisher() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [pub_id, setPub_id] = useState(null);

    useEffect(() => {
        setPub_id(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setAddress(localStorage.getItem('Address'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8086/api/publishers/${pub_id}`, {
            name,
            address,
            pub_id,
        })
    }

    return (
        <div className='box'>
            <h2 className='text-center'>Update Publisher Details</h2>
            <Form className='box'>
        <Form.Field>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Field>
        <Button onClick={updateAPIData} type='submit' className="ui primary button">Update</Button>
    </Form>
        </div>
    )
}

export default UpdatePublisher;