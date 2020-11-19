import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Form, FormGroup, Input, Button, Label, Card, CardBody, CardTitle, CardText } from "reactstrap";

const initialFormValues = {
    title: "",
    description: ""
}

const AdminDashboard = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [tasks, setTasks] = useState([]);

    const history = useHistory();

    

    useEffect(() => {
        axiosWithAuth()
            .get('/tasks')
            .then(res => {
                console.log("TASKS", res)
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
    };

    const addTask = (e) => {
        e.preventDefault()
        axiosWithAuth()
            .post('/tasks', formValues)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const deleteTask = (task) => {
        axiosWithAuth()
            .delete(`/tasks/${task.id}`)
            .then(res => {
                setTasks(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            
            <div className="formContainer">
                <Form onSubmit={addTask} className="form">
                <h3>Add a Task</h3>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input 
                            type='input'
                            name='title'
                            value={formValues.title}
                            onChange={handleChange}
                            id="title"
                        />
                    </FormGroup>
            
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input 
                            type='input'
                            name='description'
                            value={formValues.description}
                            onChange={handleChange}
                            id="description"
                        />
                    </FormGroup>
                
                    <Button color="primary">Add a Task</Button>
                </Form>
            </div>
            

            <h4>Tasks</h4>
            {tasks.map(task => (
                <div className="cardDiv">
                    <Card className="cardStyling">
                        <CardBody className="cardBody">
                            <CardTitle>Title: {task.title}</CardTitle>
                            <CardText>Description: {task.description}</CardText>
                            <Button color="secondary" onClick={() => history.push(`/edit-task/${task.id}`)}>Edit Task</Button>
                            
                            <Button color="tertiary" onClick={e => {
                                e.stopPropagation();
                                deleteTask(task)
                            }}>
                                Delete Task
                            </Button>
                        </CardBody>
                        
                    </Card>
                    
                </div>
            ))}
        </div>
    )
}

export default AdminDashboard;