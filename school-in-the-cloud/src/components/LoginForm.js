import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, } from "reactstrap";

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="formContainer">
            <Form onSubmit={submitHandler} className="form">
                <div className="inner-form">
                    <h3>Login</h3>
                    {(error !="") ? ( <div className= "error">{error}</div> ) : ""}
                    <FormGroup>
                        <Label  for="username">Username</Label>
                        <Input type="text" name="username" id="username" onChange={e => setDetails({...details, name:e.target.value})} value={details.name} placeholder="Username Here"/>
                    </FormGroup>
                    <FormGroup>
                    <Label  for="password">Password</Label>
                    <Input type="password" name="password" id="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password} placeholder="Password Here"/>
                    </FormGroup>
                    <Button color="primary">Login</Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm;