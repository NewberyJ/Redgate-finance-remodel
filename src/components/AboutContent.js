import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Content.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Button } from './Button';
import Cards from './Cards';




function AboutContent() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (

    <React.Fragment>
    <div className="container">

    <div className='second-hero-container'>
      <div className='second-hero'>
        <h1>Always get a second opinion</h1>

      </div>
    </div>


      <div className="wrapper">
        <div className="content" data-aos="fade-up">
          <div className='heading'>At Redgate Finance, we know banks</div>



          <div className="blurb-one">Our team has extensive experience working in the banking sector.
           That’s why we understand how the system works. What we also know is that there is a lot of misinformation
            out there and customers are getting the information they need to make the best decisions for their financial
             circumstances.
           Our advice? Always get a second opinion - it only costs you a bit of time and effort,
            but it could end up saving you money in the long run.

<h2> Xaviera Moore </h2>
          </div>

          <div className='second-container'>

          <div className='small-container' data-aos="fade-up">
          <div className='blurb-two'>
Xaviera Moore is the Director and Founder of Redgate Finance. Her first job after leaving school was at the Commonwealth Bank in Toowoomba.
This was the start of a long and rewarding career in banking and finance.
 She’s helped thousands of customers over the years, working her way from a teller through to customer service, Home Loan Manager and, finally, Branch Manager.

          </div>


            <img className='xaviera-img' src='/images/xaviera.png'/>
            </div>

          </div>
        </div>

            <div className='heading' data-aos="fade-up">What our customers are saying</div>
            <div className="blurb-one" data-aos="fade-up">
“It is with great delight that I’m able to share my experience of many
 years working with Xaviera Moore. As an estate agent having a strong support
  group for my client base is paramount to a good business. Xaviera has excelled
   with her level of service to both my buyers and my sellers during their real
    estate transactions. Being able to rely of someone to offer the finest tailor-made
     financial packages is wonderful and that’s exactly what I’ve experienced with Xaviera.
      I strongly recommend her to all of my clients and I strongly recommend her to you.”

      <p className='names' data-aos="fade-up">ROBON RYAN</p>

“Redgate Finance helped us to secure our home loan in 2019. Xaviera was incredibly supportive throughout the entire application process through to settlement.
 She was able to answer our questions to make the process simple and easy to understand and kept us constantly updated
 with the progress. Xaviera is caring, efficient and clearly an expert in lending. I highly recommend Redgate Finance and
  look forward to working with them again in the future.”


  <p className='names' data-aos="fade-up">BIANCA COLEBORN</p>


    “We couldn’t be happier with the support and service provided to us by Xaviera for our home loan. She was very attentive
     to our needs and an excellent communicator. We have no hesitation in recommending Xaviera and Redgate Finance to others
      looking to buy their own home.”


  <p className='names' data-aos="fade-up">CATHY AND JEREMIAH O'CONNOR</p>

            </div>


      </div>
    </div>


    </React.Fragment>

  );
}


export default AboutContent
