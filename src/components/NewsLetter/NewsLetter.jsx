import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './NewsLetter.css';

const NewsLetter = () => {

   const navigate = useNavigate();

   return(
       <div className="news-letter" onClick={() => { navigate("/contact") }}>
           <h5 className="text">Interested in our services? Send us message!</h5>
       </div>
   );
}

export default NewsLetter;