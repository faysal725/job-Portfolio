import React from 'react';
import Menu from './Menu';
import './Header.css'
import { Col, Row, Container } from 'react-bootstrap';






const Header = () => {
    return (
        <div className="headerArea">
            <div className="headerOverlay">
                <Menu></Menu>

                <Container>
                    <Row>
                        <Col className="headLine">
                            <h1><b>Faysal Ahmad</b></h1>
                               
                            <h4>A Professional Web Developer</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        <br />
        </div>
    );
};

export default Header;