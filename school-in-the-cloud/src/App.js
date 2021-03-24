import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AdminDashboard from './components/AdminDashboard';
import VolunteerDashboard from './components/VolunteerDashboard';
import StudentDashboard from './components/StudentDashboard';
import PrivateRoute from './components/PrivateRoute';
import EditTask from './components/EditTask';

import './App.css';
import FormContainer from "./signUpFormComponents/FormContainer"
import Nav from "./components/Nav";
import LoginContainer from "./components/LoginContainer";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
         
        </div>

        <Route exact path="/"> 
          <Nav />
          <LoginContainer /> 
        </Route>
        <Route exact path="/sign-up">  
          <Nav />
          <FormContainer/>
        </Route>
        <PrivateRoute exact path="/admin" component={AdminDashboard}></PrivateRoute>
        <PrivateRoute exact path="/volunteer" component={VolunteerDashboard}></PrivateRoute>
        <PrivateRoute exact path="/student" component={StudentDashboard}></PrivateRoute>

        <Route exact path='/edit-task/:id' render={() => (
          <EditTask />
        )} />
      </div>
    </Router>
  );
}

export default App;
