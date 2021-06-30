import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Menu from './Menu';
import './Slider.css';
import Button from 'react-bootstrap/Button';


const Slider = () => {

    return (
       <Carousel>
        <Carousel.Item interval={1000}>
        <img
        className="d-block w-100 img-mov"
        src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_960_720.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <Button className="slider-btn" variant="light">See More</Button>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img
        className="d-block w-100 img-mov"
        src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_960_720.jpg"
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Button className="slider-btn" variant="light">See More</Button>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <img
        className="d-block w-100 img-mov"
        src="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762_960_720.jpg"
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        <Button className="slider-btn" variant="light">See More</Button>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default Slider;