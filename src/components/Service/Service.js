import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = ({ service }) => {
    const { img, name, title, description } = service;
    return (
        <div>
            <Card className="m-2" style={{ width: '21rem' }}>
                <Card.Img variant="top" width="250px" height="150px" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>

                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;