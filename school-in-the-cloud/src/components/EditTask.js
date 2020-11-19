import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialFormValues = {
    title: '',
    description: ''
}

const EditTask = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues);

    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`/tasks/${id}`)
            .then(res => {
                setFormValues(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = e => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/tasks/${id}`, formValues)
            .then(res => {
                console.log(res)
                history.push('/admin')
            })
            .catch(err => {
                console.log(err)
            })
    }
 
    return(
        <div>
            <h2>Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='title'
                    placeholder='Edit Title'
                    value={formValues.title}
                    onChange={handleChange}
                />
                <br></br>
                <input 
                    type='text'
                    name='description'
                    placeholder='Edit Description'
                    value={formValues.description}
                    onChange={handleChange}
                />
                <br></br>
                <button>Update</button>
            </form>
        </div>
    )
}

export default EditTask;