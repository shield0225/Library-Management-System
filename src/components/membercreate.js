import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateMember() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [memb_type, setMemb_type] = useState('');
    const [mem_date, setMem_date] = useState('');
    const [expiry_date, setExpiry_date] = useState('');
    const postData = () => {
        console.log(name);
        console.log(address);
        console.log(memb_type);
        console.log(mem_date);
        console.log(expiry_date);
        axios.post(`http://localhost:8086/api/members`, {
            name,
            address,
            memb_type,
            mem_date,
            expiry_date
        }).then(response => {
            console.log(response.data);
            navigate('/members');
        }).catch(error => {
            console.error("Error posting data:", error);
        });
    };
    
    return (
        <div className='box'>
            <h2 className='text-center'>Enter Member Details</h2>
            <Form className='box'>
        <Form.Field className='input-container1'>
            <label>Name</label>
            <input placeholder='Aileen Salcedo' onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field className='input-container1'>
            <label>Address</label>
            <input placeholder='101 Milner, Scarborough, ON' onChange={(e) => setAddress(e.target.value)} />
        </Form.Field >
        <Form.Field >
            <label>Membership Type</label>
            <input placeholder='Premium' onChange={(e) => setMemb_type(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Membership Date</label>
            <input placeholder='01/31/2023' onChange={(e) => setMem_date(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Expiry Date</label>
            <input placeholder='12/31/2023' onChange={(e) => setExpiry_date(e.target.value)} />
        </Form.Field>
        <Button onClick={postData} type='submit' className="ui primary button">Create</Button>
    </Form>
    </div>
    )
}

export default CreateMember;