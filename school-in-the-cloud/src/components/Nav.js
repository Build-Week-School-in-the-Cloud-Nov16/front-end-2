import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";

export default function NavBar (props) {
    return(
        <div className="nav">
            <Nav>
                <NavItem>
                    <NavLink>
                        <Link to="/">Login</Link>   
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/sign-up">Sign Up</Link>    
                    </NavLink>
                </NavItem>
            </Nav>
        </div>
    )
}