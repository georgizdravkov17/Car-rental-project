import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
       <p>All rights reserved by Mercedes-benz</p>
       <div className="social-media">
       <FontAwesomeIcon icon={faBarcode} />
       <FontAwesomeIcon icon={faBarcode} />
       <FontAwesomeIcon icon={faBarcode} />
       <FontAwesomeIcon icon={faBarcode} />
       <FontAwesomeIcon icon={faBarcode} />
        </div> 
    </footer>
  )
}

export default Footer

