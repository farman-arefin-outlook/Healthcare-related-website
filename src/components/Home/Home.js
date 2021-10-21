import React from "react";
import bgImage from "./../../assets/images/backgroundImg.jpg";
//import Bg from "./../../assets/images/bg.png";
import { Container, Button, Row } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Home = () => {
    const { services } = useAuth();
    return (
        <div>
            <div
                style={{
                    background: `url(${bgImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    backgroundSize: "cover",
                }}
            >
                <Container>
                    <div
                        style={{ height: "90vh" }}
                        className="d-flex justify-content-center align-items-center"
                    >
                        <div className="text-center my-5 py-5">
                            <Bounce left cascade>
                                <h1 className="text-dark">Health is all we are concerned about.</h1>
                            </Bounce>

                            <Bounce right cascade>
                                <p className="my-4 text-dark fs-5">
                                    Dedicated to Hope, Healing, and Recovery.We are on the side of humanity.What We Offer
                                    Healing for a better world.
                                </p>
                            </Bounce>

                            <Bounce>
                                <NavLink
                                    to='/about' className="rounded-pill fs-5  py-2  px-4 btn btn-primary">About Us</NavLink>
                            </Bounce>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;