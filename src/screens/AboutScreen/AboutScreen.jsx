import React from 'react';
import ReactPlayer from 'react-player';
import { HeaderSection, NewsLetter } from '../../components/components.js';
import { carsImages, carsVideos } from '../../helpers/data.js';
import './AboutScreen.css';

const AboutScreen = () => {
  return (
    <div className="about-screen">
         <HeaderSection img={carsImages[1]}/>
         <div className="info">
             <h1 className="heading">Who are we?</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione at quia dolore minima, in labore dignissimos tempora alias iure dicta possimus natus, nisi animi repellendus omnis libero suscipit. Commodi, tenetur. Tempora distinctio, rem deserunt nam ad necessitatibus eaque nostrum!</p> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione at quia dolore minima, in labore dignissimos tempora alias iure dicta possimus natus, nisi animi repellendus omnis libero suscipit. Commodi, tenetur. Tempora distinctio, rem deserunt nam ad necessitatibus eaque nostrum!</p> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione at quia dolore minima, in labore dignissimos tempora alias iure dicta possimus natus, nisi animi repellendus omnis libero suscipit. Commodi, tenetur. Tempora distinctio, rem deserunt nam ad necessitatibus eaque nostrum!</p> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione at quia dolore minima, in labore dignissimos tempora alias iure dicta possimus natus, nisi animi repellendus omnis libero suscipit. Commodi, tenetur. Tempora distinctio, rem deserunt nam ad necessitatibus eaque nostrum!</p> 
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ratione at quia dolore minima, in labore dignissimos tempora alias iure dicta possimus natus, nisi animi repellendus omnis libero suscipit. Commodi, tenetur. Tempora distinctio, rem deserunt nam ad necessitatibus eaque nostrum!</p> 
         </div>
         <NewsLetter />
         <ReactPlayer url={carsVideos[0]} controls />
    </div>
  )
}

export default AboutScreen