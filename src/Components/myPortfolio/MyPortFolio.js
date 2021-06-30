import React from 'react';
import './MyPortFolio.css'
import { Col, Container, Image, ProgressBar, Row } from 'react-bootstrap';
import vinciTech from "../Images/vinci-tech2.png";
import bikeServicing from "../Images/bikeServicing2.png";
import doctorsPortal from "../Images/DoctorsPortal2.png";
import eCommerce from "../Images/eCommerce2.png"
import hotGadget from "../Images/hotGadgets2.png"
import portfolio from "../Images/firstPortfolio2.png"
import tempHot from "../Images/tempHot.png"

import reactIcon from '../Icon/react.png'
import htmlIcon from '../Icon/html5.png'
import cssIcon from '../Icon/css3.png'
import bootstrapIcon from '../Icon/bootstrap.png'
import JavaIcon from '../Icon/javascript.png'
import nodeIcon from '../Icon/nodeJS.png'
import mongoIcon from '../Icon/mongoDb.png'
import npmIcon from '../Icon/npm.png'
import fireIcon from '../Icon/firebase.png'
import gitIcon from '../Icon/github.png'
import wordIcon from '../Icon/wordpress.png'
import phpIcon from "../Icon/php.png"
import materialIcon from "../Icon/materialUI.png"



const MyPortFolio = () => {
    return (
        <Container>
        <br /><br />
        <div style={{textAlign:"center"}}>
        <h1><b>My Portfolio</b></h1>
        <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>
        <br /><br />



        <Row>
        <Col xs={12} md={6} lg={4}>
            <a href="http://vinci-tech.com/">
              <img className="portfolioImage" src={bikeServicing} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b> Bike Servicing </b></h2>
            <p>Its a site made with React</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={bootstrapIcon} alt="" />
            <img className="techIcon" src={JavaIcon} alt="" />
            <img className="techIcon" src={reactIcon} alt="" />
            <img className="techIcon" src={nodeIcon} alt="" />
            <img className="techIcon" src={mongoIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={npmIcon} alt="" />
            <img className="techIcon" src={gitIcon} alt="" />
            <img className="techIcon" src={fireIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />
<Row>

<Col xs={12} md={6} lg={4}>
    <a href="http://vinci-tech.com/">
      <img className="portfolioImage" src={vinciTech} alt="" />
    </a>
    
  </Col>

  <Col xs={12} md={6} lg={8}>
            <h2><b> Corporate site </b></h2>
            <p>Its a site with wordpress</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={wordIcon} alt="" />
          
            <img className="techIcon" src={phpIcon} alt="" />
            <br /><br />
            </Col>
            </Row>
           
          </Col>
</Row>
<br /><br /><br />



<Row>
        <Col xs={12} md={6} lg={4}>
            <a href="#">
              <img className="portfolioImage" src={doctorsPortal} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b> Doctors Portal</b></h2>
            <p>Its a site made for doctors appointment</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={materialIcon} alt="" />
            <img className="techIcon" src={JavaIcon} alt="" />
            <img className="techIcon" src={reactIcon} alt="" />
            <img className="techIcon" src={nodeIcon} alt="" />
            <img className="techIcon" src={mongoIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={npmIcon} alt="" />
            <img className="techIcon" src={gitIcon} alt="" />
            <img className="techIcon" src={fireIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />

<Row>
        <Col xs={12} md={6} lg={4}>
            <a href="https://kind-pike-f464c0.netlify.app/">
              <img className="portfolioImage" src={eCommerce} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b>eCommerce </b></h2>
            <p>Its an eCommerce site For Daily Items</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={bootstrapIcon} alt="" />
            <img className="techIcon" src={JavaIcon} alt="" />
            <img className="techIcon" src={reactIcon} alt="" />
            <img className="techIcon" src={nodeIcon} alt="" />
            <img className="techIcon" src={mongoIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={npmIcon} alt="" />
            <img className="techIcon" src={gitIcon} alt="" />
            <img className="techIcon" src={fireIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />



<Row>
        <Col xs={12} md={6} lg={4}>
            <a href="https://faysal725.github.io/gadgets/">
              <img className="portfolioImage" src={hotGadget} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b>eCommerce </b></h2>
            <p>Its an eCommerce site For gadgets</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={bootstrapIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={gitIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />
    

<Row>
        <Col xs={12} md={6} lg={4}>
            <a href="https://faysal725.github.io/temperatureHOT/">
              <img className="portfolioImage" src={tempHot} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b>Global Temp App</b></h2>
            <p>Its an Portfolio site</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={bootstrapIcon} alt="" />
            <img className="techIcon" src={JavaIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={gitIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />


    
<Row>
        <Col xs={12} md={6} lg={4}>
            <a href="https://faysal725.github.io/portfolio3/">
              <img className="portfolioImage" src={portfolio} alt="" />
            </a>
          </Col>
          
          <Col xs={12} md={6} lg={8}>
            <h2><b>Portfolio </b></h2>
            <p>Its an Portfolio site</p>
            <h4 className="technologyUsed">Technology Used</h4>
            
            <Row>
            <Col>
            <img className="techIcon" src={htmlIcon} alt="" />
            <img className="techIcon" src={cssIcon} alt="" />
            <img className="techIcon" src={bootstrapIcon} alt="" />
            <br /><br />
            </Col>
            </Row>

            
            <h4 className="technologyUsed">Tools Used</h4>
            <Row>
            <Col>
            <img className="techIcon" src={gitIcon} alt="" />
            </Col>
            </Row>
           
          </Col>
        </Row>
<br /><br /><br />

      </Container>  
    );
};

export default MyPortFolio;