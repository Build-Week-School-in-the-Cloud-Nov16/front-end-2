import React from "react";
import { Button, Form, FormGroup, Label, Input, } from "reactstrap";

export default function SignUpForm(props) {
    const { formValues, change, submit, buttonDisabled, errors } = props;
    return (
        <div className="formContainer">
            
            <Form onSubmit={submit} className="form">
            <h3>Create Account</h3>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" id="username" value={formValues.username} onChange={change} placeholder="Username Here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" id="password" value={formValues.password} onChange={change} placeholder="Password Here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" value={formValues.email} onChange={change} placeholder="Email Here"/>
                </FormGroup>
                <FormGroup>
                    <Label for="role">Role</Label>
                    <Input type="select" name="role" id="role" value={formValues.role} onChange={change}>
                        <option value="">--Choose Role--</option>
                        <option value="admin">Admin</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="student">Student</option>
                    </Input>
                </FormGroup>
                <Button color="primary" disabled={buttonDisabled}>Submit</Button>
                
            </Form>
            <div>
                <p className="errors">{errors.username}</p>
                <p className="errors">{errors.password}</p>
                <p className="errors">{errors.email}</p>
                <p className="errors">{errors.role}</p>
            </div>
        </div>
    );
}