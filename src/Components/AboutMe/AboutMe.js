import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';
import { ProgressBar } from 'react-bootstrap';
import aboutMe from '../Images/aboutme.jpg'


const AboutMe = () => {
    return (
        <>
        <Container>
            <Row className="pb-5">
                <Col style={{textAlign:"center"}}>
                <h1><b>About Me</b></h1>
                    <br />
                </Col>
            </Row>
            <Row>
              <Col lg={4} xs={12} md={4}>
                  <img className="d-block w-100" 
                  src={aboutMe} alt="" />
                <br /><br />
              </Col>
              <Col lg={8} xs={12} md={8}>
                  <Container fluid>
                    <Row>
                    <Col>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Name:</b> Faysal Ahmad</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Website:</b> www.xyz.com</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Phone:</b> +880 1923733384</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Country:</b> Bangladesh</h6>
                    </Col>
                    <Col>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Age:</b> 30</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Degree:</b> Bsc. in Textile Engineering</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Email:</b> faysal.dev@gmail.com</h6>
                        <h6 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  City:</b> Dhaka</h6>
                    </Col>
                    
                    </Row>
                    <br /><br />
                    <Row>
                        <Col>
                            
                            <Row style={{textAlign:"left"}}>
                                <Col xs={3} md={2} className="text-danger"><FontAwesomeIcon icon={faClock} className="fa-2x" /></Col>
                                <Col xs={12} md={8}>
                                <h2><b>01</b></h2>
                                <p>One year of training exprerience on web technology</p>
                                </Col>
                            </Row>
                            
                        </Col>
                        <Col>
                        <Row style={{textAlign:"left"}}>
                                <Col xs={3} md={2} className="text-warning"><FontAwesomeIcon icon={faFolder} className="fa-2x" /></Col>
                                <Col xs={12} md={8}>
                                <h2><b>12</b></h2>
                                <p>Projects Done And More is Comming</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </Container>
                    <h5>HTML5</h5>
                    <ProgressBar now={80} variant="warning"/> <br />
                    <h5>CSS3</h5>
                    <ProgressBar now={70} variant="warning"/> <br />
                    <h5>Javascript</h5>
                    <ProgressBar now={70} variant="warning"/> <br />
              </Col>
            </Row>
        </Container>
        <br /><br />
        </>
    );
};

export default AboutMe;