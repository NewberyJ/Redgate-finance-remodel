import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero-section.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img className='hero-img' src='/images/hero.jpg' />
      <h1>Achieve your financial goals</h1>
    </div>
  );
}

export default HeroSection;
