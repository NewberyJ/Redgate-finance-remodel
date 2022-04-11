import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards2() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' >
            <CardItem
              src='/images/img-6.jpg'
              text='First Home Buyers'
              blurb='Buying your first home is an incredibly exciting time in your life, but applying for your first home loan can be daunting. We have worked with many first home buyers and will help you every step of the way.'
              label='Contact'
              path='/pages/Contact'
            />

            </ul>

            <ul className='cards__items' >
            <CardItem
              src='/images/img-8.jpg'
              text='Home Loans'
              blurb='Whether this is your first home loan or you’ve owned a home previously, we will help you navigate the home loan application process from the beginning through to the settlement.'
              label='Contact'
              path='/pages/Contact'
            />
            </ul>

            <ul className='cards__items' >
            <CardItem
              src='/images/img-7.jpg'
              text='Car Loans & Asset Finance'
              blurb='Need to purchase a new set of wheels? Talk to us about the various car loans and equipment finance options that are available and how we can help to get you on the road with a minimum of fuss.'
              label='Contact'
              path='/pages/Contact'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards2;
