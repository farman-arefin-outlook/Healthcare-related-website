import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterBg from './../../assets/images/footer-bg.PNG';
import FooterLogo from './../../assets/images/footerLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="text-white">
            <div style={{ background: `url(${FooterBg})` }}>
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center">
                                <img width='200px' src={FooterLogo} alt="" />
                            </div>
                            <ul className="list-unstyled">
                                <li><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>Noakhali,Chittagong,Bangladesh</li>
                                <li><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>Official: farman.arefin@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>Helpline: 0183473783,01934737437(Available: 10:00 AM to 10.00PM</li>
                            </ul>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
            <p className="text-center m-0 py-3 bg-info">Copyright &copy; All Right Reserved by Farman Arefin Tamim Community in 2021.</p>
        </div >
    );
};

export default Footer;