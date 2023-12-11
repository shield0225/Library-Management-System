import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreatePub() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const postData = () => {
        console.log(name);
        console.log(address);
        axios.post(`http://localhost:8086/api/publishers`, {
            name,
            address
        }).then(response => {
            console.log(response.data);
            navigate('/');
        }).catch(error => {
            console.error("Error posting data:", error);
        });
    };
    
    return (
        <div className='box'>
            <h2 className='text-center'>Enter Publisher Details</h2>
            <Form className='box'>
        <Form.Field className='input-container1'>
            <label>Name</label>
            <input placeholder='Canada Publishing' onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field className='input-container1'>
            <label>Address</label>
            <input placeholder='101 Story Blvd, ON' onChange={(e) => setAddress(e.target.value)} />
        </Form.Field >
        <Button onClick={postData} type='submit' className="ui primary button">Create</Button>
    </Form>
    </div>
    )
}

export default CreatePub;