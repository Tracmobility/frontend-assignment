import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import {withRouter} from "react-router";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {BellFill, EnvelopeFill, PersonCircle, Search} from "react-bootstrap-icons";
import './navbar.css';
import avatar from '../../assets/avatar.jpg';

const nav = props => {


    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="csnavbar">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Form inline>
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" size="sm"/>
                            <Search size={20}
                                className="sidebarIcon"/>
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <BellFill size={20}
                                className="sidebarIcon"/></Nav.Link>
                        <Nav.Link>
                            <EnvelopeFill size={20}
                                className="sidebarIcon"/></Nav.Link>
                        <Nav.Link className="avatarLink">
                            <img className="avatar-user" src={avatar} alt="User"  aria-hidden="true"  height="30" width="30"/>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};
const Header = withRouter(nav);
export default Header
