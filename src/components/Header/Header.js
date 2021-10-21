import React from 'react';
import { Badge, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/Tamim Diagonostic (PVT) LTD Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { NavLink } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;
    const { displayName, photoURL, email } = user;
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img width='250px' height='80px' src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/appoint">Appointment</Nav.Link>
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
                            {
                                !displayName ? (
                                    <>
                                        <Nav.Link as={NavLink} to="/signup">Sign Up</Nav.Link>
                                        <Nav.Link as={NavLink} to="/login">Sign In</Nav.Link>
                                    </>
                                ) : (
                                    <NavDropdown
                                        title={
                                            <img
                                                style={{ width: '40px', borderRadius: '50%' }}
                                                src={user.photoURL}
                                                alt="" />}
                                    >
                                        <div className="text-center mx-2">
                                            <h5 className="text-center m-2">{displayName}</h5>
                                            <h6>Account</h6>
                                            <h6>Appointed</h6>
                                            <h6>Visited</h6>
                                            <h6>Settings</h6>
                                            <button onClick={logOut} className="btn btn-primary mt-2">Sign Out</button>
                                        </div>
                                    </NavDropdown>
                                )}
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