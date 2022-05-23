import React from 'react';
import {Card, Button} from 'react-bootstrap';

const CarCard = ({img}) => {
  return (
    <Card className="box-shadow" style={{ width: '18rem', border: 'none' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Mercedes Benz</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">View Car</Button>
  </Card.Body>
</Card>
  )
}

export default CarCard;