import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebookIcon from '../Icon/facebook.png'
import gmailIcon from '../Icon/gmail.png'
import linkedIn from "../Icon/linkedIn.png"
import React from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
import { faMailBulk, faPhone, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import './ContactMe.css'

const ContactMe = () => {
    return (
        <>
            <Container>
                <h1 style={{textAlign:"center"}}><b>Contact Me</b></h1>

                <br /><br />
            <Row>
            <Col lg={6} md={12} xs={12}>
                <Row style={{justifyContent:"center"}}>
                <div  className="shareCard">
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faMailBulk} className="fa-2x iconService"/>
                        </div>
                        <h5 className="text-muted"><b>Email Me</b></h5>
                    <a href="https://facebook.com/faysal725ahmed"><img className="shareIcon" src={facebookIcon} alt="" /></a>
                    <img className="shareIcon" src={gmailIcon} alt="" />
                    <img className="shareIcon" src={linkedIn} alt="" />
                    </div>

                </Row>
                <br /><br />
                <Row>
                <Col>
                    <div className="contactIcons">
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faMailBulk} className="fa-2x iconService"/>
                        </div>
                        <h5 className="text-muted"><b>Email Me</b></h5>
                        <p>faysal.dev@gmail.com</p>
                    </div>
                </Col>
                <Col>
                <div className="contactIcons">
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faPhone} className="fa-2x iconService"/>
                        </div>
                        <h5 className="text-muted"><b>Call Me</b></h5>
                        <p>+880 01923733384</p>
                    </div>
                </Col>
                </Row>
            </Col>
            <Col lg={6} md={12} xs={12}>
                <br /><br />
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Row>
                        <Col>
                            <Form.Control className="inputText" type="name" placeholder="your name" />
                        </Col>
                        <Col>
                            <Form.Control className="inputText" type="email" placeholder="your email" />
                        </Col>
                    </Row>
                    <br />
                <Form.Control type="Subject" className="inputText" placeholder="enter subject" />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                
                <Form.Control as="textarea" className="inputText" placeholder="Your message" rows={3} />
                <br />
                <div className="submitButton">
                <Button variant="warning" className="ali">Submit</Button>
                </div>
                
                </Form.Group>
                </Form>
            
            </Col>
            </Row>
            </Container>
        </>
    );
};

export default ContactMe;