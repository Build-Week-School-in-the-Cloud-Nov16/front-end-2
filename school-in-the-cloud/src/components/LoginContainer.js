import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import LoginForm from './LoginForm';

export default function LoginContainer(props) {


  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name:"", email:""});
  const [error, setError] = useState("");

  const history = useHistory();

  const Login = details => {
    console.log(details);

      if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      })
    } 
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }

    // Getting it to post data to the API and then route to the correct place

    const postData = {
      username: details.name,
      password: details.password
    }

    axios
      .post('https://bwschoolinthecloud.herokuapp.com/api/auth/login', postData)
        .then(res => {
          // console.log("HERE", res)
          localStorage.setItem('token', res.data.token)

          if (res.data.role === 'admin'){
            history.push('/admin')
          } else if (res.data.role === 'volunteer') {
            history.push('/volunteer')
          } else {
            history.push('/student')
          }
        })
        .catch(err => {
          console.log(err);
        })

  }

  const Logout = () => {
    setUser({ name: "", email: ""});
  }
  return (
    <div className="LoginForm">
    {(user.email != "") ? (
      <div className="welcome">
      <h2>Welcome, <span>{user.name}</span></h2>
      <button onClick={Logout}>Logout</button>
      </div>
    ) : (
      <LoginForm Login={Login} error={error} />
    )}
    </div>
   );
}