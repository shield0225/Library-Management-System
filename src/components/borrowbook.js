import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BorrowBook() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState('');
    const [publisher_id, setPublisher_id] = useState('');
    const postData = () => {
        console.log(title);
        console.log(authors);
        console.log(available);
        console.log(publisher_id);
        axios.post(`http://localhost:8086/api/borrowedbooks`, {
            title,
            authors: authors.split(',').map(author => author.trim()),
            price,
            available,
            publisher_id
        }).then(response => {
            console.log(response.data);
            navigate('/');
        }).catch(error => {
            console.error("Error posting data:", error);
        });
    };
    
    return (
        <div className='box'>
            <h2 className='text-center'>Enter Book Details</h2>
            <Form className='box'>
        <Form.Field className='input-container1'>
            <label>Title</label>
            <input placeholder='Agile Software Craftsmanship v2' onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        <Form.Field className='input-container1'>
            <label>Authors</label>
            <input placeholder='Robert C. Martin' onChange={(e) => setAuthors(e.target.value)} />
        </Form.Field >
        <Form.Field >
            <label>Price</label>
            <input placeholder='31.99' onChange={(e) => setPrice(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Available</label>
            <input placeholder='1' onChange={(e) => setAvailable(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Publisher</label>
            <input placeholder='1' onChange={(e) => setPublisher_id(e.target.value)} />
        </Form.Field>
        <Button onClick={postData} type='submit' className="ui primary button">Create</Button>
    </Form>
    </div>
    )
}

export default BorrowBook;