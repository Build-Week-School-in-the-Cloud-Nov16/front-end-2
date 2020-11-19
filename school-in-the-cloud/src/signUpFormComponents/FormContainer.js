import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import SignUpForm from "./SignUpForm";
import formSchema from "./formSchema";
import * as yup from "yup";
import axios from "axios";

const defaultValues ={
    username: "",
    password: "",
    email: "",
    role: "",
}

const defaultErrors = {
    username: "",
    password: "",
    email: "",
    role: "",
}

function FormContainer(props) {

   const [ formValues, setFormValues ] = useState(defaultValues);
   const [ savedFormInfo, setSavedFormInfo ] = useState([]);
   const [ errors, setErrors ] = useState(defaultErrors);
   const [ buttonDisabled, setButtonDisabled ] = useState(true);
   const [ post, setPost ] = useState([]);

   const history = useHistory();

   const change = (evt) => {
       const { name, value } = evt.target;
       validate(name, value);
       setFormValues({...formValues, [name]: value});
   }

   const submit = (evt) => {
       evt.preventDefault();

       axios.post("https://bwschoolinthecloud.herokuapp.com/api/auth/register", formValues)
            .then((res) => {
                setPost(res.data);
                console.log(res.data);
                history.push('/');

                // if (res.data.role === 'admin'){
                //     history.push('/admin')
                // } else if (res.data.role === 'volunteer') {
                //     history.push('/volunteer')
                // } else {
                //     history.push('/student')
                // }
            })
            .catch((err) => {
                console.log(err);
                debugger;
            })

       const newData = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        email: formValues.email.trim(),
        role: formValues.role,
       }

       setSavedFormInfo([...savedFormInfo, newData]);
       setFormValues(defaultValues);
   }

   const validate = (name, value) => {
       yup
        .reach(formSchema, name)
        .validate(value)
        .then((valid) => {
            setErrors({ ...errors, [name]: ""});
        })
        .catch((err) => {
            setErrors({ ...errors, [name]: err.errors[0]});
        })
   }

   useEffect(() => {
       formSchema.isValid(formValues).then((valid) => {
           setButtonDisabled(!valid);
       })
   }, [formValues]);

    return (
        <div className="FormContainer">
            <SignUpForm 
                formValues={formValues} 
                change={change} 
                submit={submit}
                buttonDisabled={buttonDisabled}
                errors={errors}/>
        </div>
    );
}

export default FormContainer;