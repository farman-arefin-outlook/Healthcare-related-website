import React from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

import Zoom from "react-reveal/Zoom";
import './Service.css';
import { NavLink } from 'react-router-dom';
const Service = ({ service }) => {
    const { img, name, title, description, key } = service;
    return (
        <div>
            <Zoom>
                <Card className="m-2 card-image" style={{ width: '21rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>

                    <Card.Body className="d-flex justify-content-between">
                        <NavLink to={`/appoint/${key}`} className="btn btn-primary me-1">View Details</NavLink>
                        <Button variant="primary"><FontAwesomeIcon icon={faBriefcaseMedical}></FontAwesomeIcon> Admit</Button>
                    </Card.Body>
                </Card>
            </Zoom>
        </div>
    );
};

export default Service;