import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Reset = () => {
    const { AllContexts } = useAuth();
    const { getEmail, resetPass, error } = AllContexts;
    return (
        <div className="text-center my-5">
            <Form onSubmit={resetPass}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email address</Form.Label>
                    <p className="text-danger">{error}</p>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter your email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Send Email
                </Button>
            </Form>
        </div>
    );
};

export default Reset;