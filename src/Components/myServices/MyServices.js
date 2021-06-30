import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Button, Card } from 'react-bootstrap';
import "./MyServices.css"

const MyServices = () => {
    return (
        <>
        <Container>
            <Row className="pb-5">
                <Col style={{textAlign:"center"}}>
                <h1><b>My Service</b> </h1>
                <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
                    <br />
                </Col>
            </Row>
            <Row>
              <Col>
                <Row>
                <Col lg={3} xs={1} md={6}>
                    <Card  className="serviceCard" >
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faFolder} className="fa-3x iconService"/>
                        </div>
                    <Card.Body>
                    <Card.Title><h3><b>Lorem Ipsum</b></h3></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>


                <Col lg={3} xs={1} md={6}>
                <Card  className="serviceCard" >
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faFolder} className="fa-3x iconService"/>
                        </div>
                    <Card.Body>
                    <Card.Title><h3><b>Lorem Ipsum</b></h3></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>


                <Col lg={3} xs={1} md={6}>
                <Card  className="serviceCard" >
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faFolder} className="fa-3x iconService"/>
                        </div>
                    <Card.Body>
                    <Card.Title><h3><b>Lorem Ipsum</b></h3></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col lg={3} xs={1} md={6}>
                <Card  className="serviceCard" >
                        <div className="d-flex justify-content-center text-warning">
                        <FontAwesomeIcon icon={faFolder} className="fa-3x iconService"/>
                        </div>
                    <Card.Body>
                    <Card.Title><h3><b>Lorem Ipsum</b></h3></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
              </Col>
              
            </Row>
        </Container>
        <br /><br />
        </>
    );
};

export default MyServices;