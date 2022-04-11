import React from 'react';
import '../../App.css';
import HeroSection from '../Hero-section';
import Content from '../Content'
import Footer from '../Footer';



function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Content />
      <Footer />
    </React.Fragment>
  )
}

export default Home;
