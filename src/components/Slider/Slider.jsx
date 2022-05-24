import React from 'react';
import { Carousel } from 'react-bootstrap';
import { carsImages } from '../../helpers/data.js';

const Slider = () => {
  return (
    <Carousel style={{height: '70vh', width: '100vw'}}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carsImages[0]}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Welcome to Mercedes Benz</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carsImages[0]}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carsImages[0]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Slider;