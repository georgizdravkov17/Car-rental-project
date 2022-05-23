import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { HeaderSection, CarCard, NewsLetter, AccordeonContainer } from '../../components/components.js';
import { carsImages } from '../../helpers/data.js';

const HomeScreen = () => {
  return (
    <div className="home-screen">
       <HeaderSection img={carsImages[0]}/>
       <div className="container main">
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       <CarCard img={carsImages[0]}/>
       </div>
       <AccordeonContainer />
       <NewsLetter />
       <h1>Heading</h1>
    </div>
  )
}

export default HomeScreen