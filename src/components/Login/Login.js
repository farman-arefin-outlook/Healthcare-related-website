import React, { useState } from 'react';
import { Button, Form, NavLink } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

import google from './../../assets/images/google-logo.png';
import facebook from './../../assets/images/facebook-logo.png';
import github from './../../assets/images/github-logo.png';

const Login = () => {

    const { signInWithGoogle, signInWithGithub, signInWithFacebook, signInWithEmailandPass, error } = useAuth();

    return (
        <div className="my-4">
            <h2 className="text-center mb-5">Please Login</h2>
            <p className="text-danger text-center"></p>
            <div className="w-25 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Show Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
            <p className="mt-2">
                <NavLink className="text-decoration-none" to="/signup">
                    Create an Account.
                </NavLink>
            </p>
            <p className="mt-3">Or</p>
            <p>Login With</p>
            <div>
                <button>
                    <img src={google} width='50px' height='50px' borderRadius='50px' alt="google-icon" />
                </button>
                <button>
                    <img src={facebook} width='50px' height='50px' borderRadius='50px' alt="facebook-icon" />
                </button>
                <button>
                    <img src={github} width='50px' height='50px' borderRadius='50px' alt="github-icon" />
                </button>
            </div>
        </div>
    );
};

export default Login;