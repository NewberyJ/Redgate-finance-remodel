import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Content.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from './Button';
import Cards2 from './Cards2';




function ServicesContent() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (

    <React.Fragment>
    <div className="container">
      <div className='wrapper'>



      <div className='second-hero-container'>
        <div className='second-hero'>
          <h1>Customer experience is at the core of what we do</h1>

        </div>
      </div>

      <div className='heading'>We’re here to take the pain out of securing a loan or refinancing</div>

      <div className='cards2-container'>

        <Cards2 />


      </div>

      </div>
    </div>


    </React.Fragment>

  );
}


export default ServicesContent
