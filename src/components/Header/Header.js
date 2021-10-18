import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/Tamim Diagonostic (PVT) LTD Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img width='250px' height='80px' src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                            <Nav.Link href="#link" className='custom-logo'>
                                <FontAwesomeIcon icon={faBriefcaseMedical} />
                                <Badge className='badge'>0</Badge>
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                            <Nav.Link as={NavLink} to="/login">Sign In</Nav.Link>
                            <Nav.Link href="#link" className='custom-logo'>
                                <FontAwesomeIcon icon={faPhone} />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;