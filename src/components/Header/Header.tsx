import React from 'react';
import AppBtn from '../Button/Button';
import Applestore from '../../assets/images/App Store.png';
import GooglePlay from '../../assets/images/Google Play.png';
import './Header.scss';
import iPhone1 from '../../assets/images/iPhone-1.png';
import iPhone2 from '../../assets/images/iPhone 2.png';
import iPhone3 from '../../assets/images/iPhone 3.png';
import iPhone4 from '../../assets/images/iPhone 4.png';
import iPhone5 from '../../assets/images/iPhone 5.png';
import iPhone6 from '../../assets/images/iPhone 6.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='row m-0 p-0 header-container justify-content-between  '>
        <div className='text-container col-xl-4 col-lg-5   '>
          <h1 className=''>Discover, search, and play any song featuring voice control.</h1>
          <div className='my-4'>
            <AppBtn value='Try it free' />
          </div>

          <div className='store-images d-flex '>
            <div className='item mt-lg-0 mt-3'>
              <img src={Applestore} alt='' />
            </div>
            <div className='item mt-lg-0 mt-3'>
              <img src={GooglePlay} alt='' />
            </div>
          </div>
        </div>
        <div className='col-xl-6 col-lg-7 d-lg-block d-none'>
          <div className='gallery-container row'>
            <div className='gallery item-1 col-4'>
              <motion.img
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                  bounce: 0.5
                }}
                animate={{ x: [150, 200], opacity: 1 }}
                initial={{ opacity: 1, x: 150 }}
                src={iPhone1}
              />
              {/* <img src={iPhone1} alt='' /> */}
            </div>
            <div className='gallery item-2 col-4'>
              <img src={iPhone2} alt='' />
            </div>
            <div className='gallery item-3 col-4'>
              {/* <img src={iPhone3} alt='' /> */}
              <motion.img
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                  bounce: 0.5
                }}
                animate={{ x: [20, 10], opacity: 1, y: 200 }}
                initial={{ opacity: 1, y: 200 }}
                src={iPhone3}
              />
            </div>
            <div className='gallery item-4 col-4'>
              <motion.img
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                  bounce: 0.5
                }}
                animate={{ x: [-10, -30], opacity: 1 }}
                initial={{ opacity: 1, y: -135 }}
                src={iPhone4}
              />
              {/* <img src={iPhone4} alt='' /> */}
            </div>
            <div className='gallery item-5 col-4'>
              <motion.img
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatType: 'reverse',
                  bounce: 0.5
                }}
                animate={{ x: [-10, -30], opacity: 1, y: -100 }}
                initial={{ opacity: 1, y: -100 }}
                src={iPhone5}
              />
              {/* <img src={iPhone5} alt='' /> */}
            </div>
            <div className='gallery item-6 col-4'>
              <img src={iPhone6} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
