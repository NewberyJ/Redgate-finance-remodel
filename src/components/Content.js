import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Content.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from './Button';
import Cards from './Cards';
import $ from 'jquery';
import ImageSlider from './imageSlider';

function Content() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (

    <React.Fragment>
    <div className="container">
      <div className="wrapper">
        <div className="content" >
          <div className='heading' data-aos="fade-up">We provide the service that the banks no longer offer</div>
          <div className="blurb-one" data-aos="fade-up">At Redgate Finance, we want our customers to achieve their
           financial goals and build wealth. In many cases, this starts with their first home loan,
            car loan or equipment finance. We understand that lending can be complex and we’re here to help.
           The team at Redgate Finance are lending experts and we want to build a relationship with
            you by providing you with the information you need to make an informed decision.

            <div className='button-about'>
            <Link to='/pages/About'>
            <Button

              className='btns'
              buttonStyle='btn--secondary'
              buttonSize='btn--medium'
            >
              ABOUT REDGATE FINANCE
            </Button>
            </Link>

            </div>
<h2> We help our customers by </h2>
          </div>

          <div className='second-container'>

            <Cards  />


            <div className='blurb-two' data-aos="fade-up">

            </div>


          </div>
        </div>
        <div className='second-hero-container'>
          <div className='second-hero'>
            <h1>'Transparency, service and open communication is the key to developing long term relationships with our customers'</h1>
            <p>— Xaviera Moore, Director of Redgate Finance</p>

          </div>
        </div>

<div className='overflow-container'>

<ImageSlider />

</div>


            <div className='heading' data-aos="fade-up">You work hard for your money - make your money work harder for you</div>
            <div className="blurb-one" data-aos="fade-up">
            Education is the key to our success. We take the time to explain your
             options to you and work together to find the best outcomes for you now. But it doesn’t stop there.
              On average, your financial
             situation will change every 18 months to 2 years, so it’s important to review your finances on
              a regular basis to make sure your finances are working for your situation.

              <div className='button-about'>
              <Link to='/pages/Services'>
              <Button

                className='btns'
                buttonStyle='btn--secondary'
                buttonSize='btn--medium'
              >
                OUR SERVICES
              </Button>
              </Link>
              </div>

            </div>

      </div>
    </div>



    </React.Fragment>
  );
}

export default Content
