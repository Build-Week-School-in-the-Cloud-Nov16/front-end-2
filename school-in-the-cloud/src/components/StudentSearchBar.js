import React, { useState } from 'react';
import { Form, Input, Button } from "reactstrap";

const SearchBox = () => {
    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={handleSubmit} row className="search">
            <Input 
               type='text'
               name='search'
               value={value}
               placeholder='Search'
               onChange={handleChange} 
            />
            <Button color="primary">Search</Button>
        </Form>
    )
}

export default SearchBox;