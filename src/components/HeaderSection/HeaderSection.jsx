import React from 'react';
import ReactPlayer from 'react-player';
import { carsVideos } from '../../helpers/data.js';
import './HeaderSection.css';

const HeaderSection = ({img, video}) => {
  return (
    <div className="header-section box-shadow-bottom">
        {
          video ? 
          <ReactPlayer url="https://www.youtube.com/watch?v=w7cSaIPUO3k&t=57s&ab_channel=SURREALMEDIA" width="100%" height="100%" controls /> :
          <img src={img} />
        }  
    </div>
  )
}

export default HeaderSection