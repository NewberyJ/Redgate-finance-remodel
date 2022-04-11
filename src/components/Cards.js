import {React, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' data-aos="slide-left" >
            <CardItem
              src='/images/img-9.jpg'
              text='Educating you on whats possible'
              blurb='It can be daunting if you don’t have a finance background and we are ready to explain the process so you feel informed and empowered.'
              label='About'
              path='/pages/About'
            />
            <CardItem
              src='../images/img-2.jpg'
              text='Navigating the banks'
              blurb='Our extensive experience working in the banking sector means we have an intimate understanding of how the systems work.'
              label='Services'
              path='/pages/services'
            />
            <CardItem
              src='/images/img-1.jpg'
              text='Understanding your needs'
              blurb='We take the time to really understand your current financial position and what your financial goals are. Every customer receives a personalised approach - not a one-size-fits-all response.'
              label='Services'
              path='/pages/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
