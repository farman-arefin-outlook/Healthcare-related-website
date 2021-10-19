import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { signInWithGoogle } = useAuth();
    return (
        <div><button onClick={signInWithGoogle}>Login With Google</button></div>
        // <div className="my-4">
        //     <h2 className="text-center mb-5">Please Login</h2>
        //     <p className="text-danger text-center"></p>
        //     <div className="w-25 mx-auto">
        //         <Form>
        //             <Form.Group className="mb-3" controlId="formBasicEmail">
        //                 <Form.Label>Email address</Form.Label>
        //                 <Form.Control type="email" placeholder="Enter email" />
        //                 <Form.Text className="text-muted">
        //                     We'll never share your email with anyone else.
        //                 </Form.Text>
        //             </Form.Group>

        //             <Form.Group className="mb-3" controlId="formBasicPassword">
        //                 <Form.Label>Password</Form.Label>
        //                 <Form.Control type="password" placeholder="Password" />
        //             </Form.Group>
        //             <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //                 <Form.Check type="checkbox" label="Show Password" />
        //             </Form.Group>
        //             <Button variant="primary" type="submit">
        //                 Log In
        //             </Button>
        //         </Form>
        //     </div>
        // </div>
    );
};

export default Login;