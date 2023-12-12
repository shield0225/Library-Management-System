import React, { useEffect, useState, postData } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

function UpdateMember() {
    const [memb_id, setID] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [memb_type, setMemb_type] = useState(null);
    const [mem_date, setMem_date] = useState(null);
    const [expiry_date, setExpiry_date] = useState(null);

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'))
        setAddress(localStorage.getItem('Address'));
        setMemb_type(localStorage.getItem('MembType'));
        setMem_date(localStorage.getItem('MembDate'));
        setExpiry_date(localStorage.getItem('ExpDate'));
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8086/api/publishers/${memb_id}`, {
            memb_id,
            name,
            address,
            memb_type,
            mem_date,
            expiry_date,
        })
    }

    return (
        <div className='box'>
            <h2 className='text-center'>Update Member Details</h2>
            <Form className='box'>
        <Form.Field>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Address</label>
            <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Membership Type</label>
            <input value={memb_type} onChange={(e) => setAddress(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Membership Date</label>
            <input value={mem_date} onChange={(e) => setAddress(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Expiry Date</label>
            <input value={expiry_date} onChange={(e) => setAddress(e.target.value)} />
        </Form.Field>
        <Button onClick={updateAPIData} type='submit' className="ui primary button">Update</Button>
    </Form>
        </div>
    )
}

export default UpdateMember;