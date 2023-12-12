import React, { useEffect, useState, postData } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';

function UpdateBook() {
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [price, setPrice] = useState(0.0);
    const [available, setAvailable] = useState('');
    const [publisher_id, setPublisher_id] = useState('');
    const [book_id, setBook_id] = useState(null);

    useEffect(() => {
            setBook_id(localStorage.getItem('ID'))
            setTitle(localStorage.getItem('Title'));
            setAuthors(localStorage.getItem('Authors'));
            setPrice(localStorage.getItem('Checkbox Value'))
            setAvailable(localStorage.getItem('Checkbox Value'))
            setPublisher_id(localStorage.getItem('Publisher'))
    }, []);

    const updateAPIData = () => {
        axios.put(`http://localhost:8086/api/books/${book_id}`, {
            title,
            authors,
            price,
            available,
            publisher_id
        })
    }

    return (
        <div className='box'>
            <h2 className='text-center'>Update Book Details</h2>
            <Form className='box'>
        <Form.Field>
            <label>Title</label>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Authors</label>
            <input value={authors} onChange={(e) => setAuthors(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Price</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Available</label>
            <input value={available} onChange={(e) => setAvailable(e.target.value)} />
        </Form.Field>
        <Form.Field>
            <label>Publisher</label>
            <input value={publisher_id} onChange={(e) => setPublisher_id(e.target.value)} />
        </Form.Field>
        <Button onClick={updateAPIData} type='submit' className="ui primary button">Update</Button>
    </Form>
        </div>
    )
}

export default UpdateBook;