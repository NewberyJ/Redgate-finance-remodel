import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';



function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-wrapper'>
        <h1 className='loan-awaits'> Your new loan awaits </h1>

        <div className='new-loan'>
        <Link to='/pages/Contact'>
        <Button

          className='btns'
          buttonStyle='btn--secondary'
          buttonSize='btn--medium'
        >
          START THE PROCESS
        </Button>
        </Link>




        </div>
      </div>

      <div className='sub-data'>
        <h3 className='email'> XAVIERA@REDGATEFINANCE.COM.AU </h3>
        <div className='sub-text'>
          <p>Suite 6, 120a Russell  Street, Toowoomba QLD 4350</p>
          <p>Redgate Finance PTY LTD ACN 636 024 765 are credit representatives
           of Finsure Finance and Insurance PTY LTD (ACN 068 153 926) Australian
            Financial Services Licence 384704 Credit Representative number
             (CRN): 520934  </p>
          <Link to='/pages/Privacy-policy'>
            <p className='link'> Privay policy </p>
          </Link>
        </div>
      </div>

    </div>
  );
}


export default Footer
