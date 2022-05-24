import React, { useState } from 'react';
import {Card, Button, Fade, Modal} from 'react-bootstrap';

const CarCard = ({vehicle}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Fade in={true}>
    <Card className="box-shadow" style={{ width: '23%', border: 'none', backgroundColor: 'inherit' }}>
  <Card.Img variant="top" src={vehicle.picture} />
  <Card.Body>
    <Card.Title>{vehicle.brand} {vehicle.model}</Card.Title>
    <Card.Text>
       <p>Type:{vehicle.type}</p>
       <p>Year:{vehicle.year}</p>
       <p>Fuel:{vehicle.fuel}</p>
       <p>Seats:{vehicle.numberOfSeats}</p>
       <h4>${vehicle.pricePerDay}</h4>
       <p>Avaliable vehicles:{vehicle.avaliableVehicles}</p>
    </Card.Text>
    <Button variant="primary" onClick={handleShow}>View Car</Button>
  </Card.Body>
</Card>
</Fade>

<Modal show={show} onHide={handleClose} style={{color: 'black'}}>
        <Modal.Header closeButton>
          <Modal.Title>{vehicle.brand} {vehicle.model}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className="img">
               <img src={vehicle.picture} alt={vehicle.brand} />
            </div> 
           <div className="info">
           <p>Type:{vehicle.type}</p>
       <p>Year:{vehicle.year}</p>
       <p>Fuel:{vehicle.fuel}</p>
       <p>Seats:{vehicle.numberOfSeats}</p>
       <h4>${vehicle.pricePerDay}</h4>
       <p>Avaliable vehicles:{vehicle.avaliableVehicles}</p>
            </div> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

</>
  )
}

export default CarCard;