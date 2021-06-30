import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';
import { Card, ProgressBar } from 'react-bootstrap';
import aboutMe from '../Images/aboutme.jpg'


const MyResume = () => {
    return (
        <>
        <Container className="pb-5">
            <Row className="pb-5">
                <Col style={{textAlign:"center"}}>
                <h1><b>My Resume</b></h1>
                <p>My Education And Professional Exprerience</p>
                    <br />
                </Col>
            </Row>
            <Row>
              <Col lg={6} xs={12} md={6}>
                    <Card style={{  border:'none', borderLeft:"5px solid #ebba34", margin:"20px" }}>
                    <Card.Body>
                    <Card.Title> <h3><b> Sumary</b></h3> </Card.Title>
                    <Card.Subtitle className="mb-2 text-warning"><h5>Faysal Ahmad</h5> </Card.Subtitle>
                    <Card.Text>
                    Enthusiastic React.js developer with vast knowledge in HTML5, CSS3 and Javascript/ES6 with the willingness to learn and master Back-end Development. Looking for a challenging yet exciting career as a Web Developer.
                    </Card.Text>
                    </Card.Body>
                    </Card>

                    
                    <Card style={{  border:'none', borderLeft:"5px solid #ebba34", margin:"20px" }}>
                    <Card.Body>
                    <Card.Title> <h3><b> Education</b></h3> </Card.Title>
                    <Card.Subtitle className="mb-2 text-warning">
                        <h5>Bachelor of Science in Textile Engineering</h5> </Card.Subtitle>
                    <Card.Text>
                        <h4 className="text-muted">SouthEast University</h4>
                    I have completed my Bachelor from SouthEast University in Textile Engineering at 2015.
                    </Card.Text>

                    <Card.Subtitle className="mb-2 text-warning">
                        <h5>Higher Secondary School Certificate</h5></Card.Subtitle>
                    <Card.Text>
                        <h4 className="text-muted">Khilgaon Govt School</h4>
                        I have completed my HSC from Khilgaon Govt High School in Science Dept at 2010.

                    </Card.Text>



                    </Card.Body>
                    </Card>

              </Col>
              <Col lg={6} xs={12} md={6}>
              <Card style={{  border:'none', borderLeft:"5px solid #ebba34", margin:"20px" }}>
                    <Card.Body>
                    <Card.Title> <h3><b> Professional Training</b></h3> </Card.Title>
                    <Card.Subtitle className="mb-2 text-warning"><h5>Build Multivendor Dropshipping Website</h5> </Card.Subtitle>
                    <Card.Text>
                    <h6 className="text-muted">MSB Academy</h6>
                        Learn to build multivendor ecommerce dropshipping website by wordpress woocommerce. 
                    </Card.Text>

                    <Card.Subtitle className="mb-2 text-warning"><h5>Complete Web Development Course</h5> </Card.Subtitle>
                    <Card.Text>
                    <h6 className="text-muted">Programming Hero</h6>
                        In this course I learn to build React website via HTML, CSS, Bootstrap. Learned to build server side with Node Js and Express JS, Setup the MongoDB database and CRUD Operation. Also I have learn to use Tools Like Git, Firebase and npm.
                    </Card.Text>


                    </Card.Body>
                </Card>

                <Card style={{  border:'none', borderLeft:"5px solid #ebba34", margin:"20px" }}>
                    <Card.Body>
                    <Card.Title> <h3><b> Professional Experience</b></h3> </Card.Title>
                    <Card.Subtitle className="mb-2 text-warning"><h5>Marketing Officer</h5> </Card.Subtitle>
                    <h6><b>System Control And Management</b></h6>
                    <Card.Text>
                    <h4 className="text-muted"></h4>
                    I have worked as a marketing officer in an IT firm. My main duty was to increase corporate sales and solving pc related problems.
                    </Card.Text>
                    </Card.Body>
                </Card>


              </Col>
            </Row>
        </Container>
        </>
    );
};

export default MyResume;