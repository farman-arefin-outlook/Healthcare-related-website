import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const { key } = useParams();

    const { services } = useAuth();
    const matchingService = services.find((service) => service.key === Number(key));
    const selected = matchingService?.title;
    const { img, title, description } = matchingService;
    return (
        <div>
            {
                title ? (
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img className="img-fluid" src={img} alt="" />
                            </Col>
                            <Col>
                                <Row>
                                    <h1>{title}</h1>
                                    <p>{description}</p>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                ) : (<h1>No Service Found</h1>)
            }
        </div>
    );
};

export default Details;