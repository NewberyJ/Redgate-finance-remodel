import React from 'react';
import {useState} from 'react';


window.addEventListener('load', (event) => {
  for (let item of document.querySelectorAll(".item")) item.classList.add("loaded");
});

const ImageSlider = () => {
  return (
    <div className='slider-container'>
      <div className='item'>
        <img src='./images/La-Trobe.png' height='75px' width='200px'/>
        <img src='./images/Adelaide-Bank.png' height='75px' width='200px'/>
        <img src='./images/AMP-Bank-Logo_RGB-288dpi.png' height='75px' width='200px'/>
        <img src='./images/CitiBank.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosANZ.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosBankwest.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosCommonwealth-Bank.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosING.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosMacquarie.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosMyLoan.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosNAB.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosResimac.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosSt-George.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosSuncorp.png' height='75px' width='200px'/>
        <img src='./images/Lender-LogosWestpac.png' height='75px' width='200px'/>
      </div>
    </div>
  )
}


export default ImageSlider
