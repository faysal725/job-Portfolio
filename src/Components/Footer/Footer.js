import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footerArea">
            <div className="overlay">
            <br /><br />
                <Container>
                <Row >
                    
                <Col  style={{textAlign:"center"}}>
                    <h1>Like What You See?</h1>
                    <h5>Then call or message me and we'll chat through what you need. <br />I got Tea and Coffee</h5>
                    <br /><br /><br />
                    <footer>© Copyright faysal. All Rights Reserved </footer>
                </Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;