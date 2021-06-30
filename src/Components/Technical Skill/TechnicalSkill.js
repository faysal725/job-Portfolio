import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClock, faFolder } from '@fortawesome/free-solid-svg-icons';

const TechnicalSkill = () => {
    return (
        <Container className="pb-5">
            <Row className="pb-5">
                <Col style={{textAlign:"center"}}>
                <h1><b>Technical Skill</b></h1>
                    <br />
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  UI Web Technologies:</b> HTML/HTML5, CSS/CSS3, SASS, JavaScript, Bootstrap, React Bootstrap, Material UI, WordPress,  JSON, JWT, Redux, GraphQL, Bootstrap, OAuth, React.js, Express JS, Node.js</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Datebase:</b> Mongo DB</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Tools:</b> NPM, Git, Firebase, Heroku</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Frontend FrameWork:</b> React JS, Node Js</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  IDE Editor:</b> VS Code, Sublime, Atom</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Debugging Tool: </b>Chrome Dev Tool</h5>
                    <br />
                    <h5 className="pb-2"><FontAwesomeIcon className="text-warning" icon={faChevronRight} /><b>  Payment Gateway: </b> Stripe</h5>
                    <br />
            </Col>
            </Row>
        </Container>
    );
};

export default TechnicalSkill;