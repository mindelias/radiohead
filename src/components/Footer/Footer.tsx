import React from 'react';
import { footerMenu } from '../../core/data/footer-menu';
import logo from '../../assets/images/logo.png';
import './Footer.scss';
import FadeInComponentWhenVisible from '../FadeInComponent';

const Footer = () => {
  return (
    <>
      <FadeInComponentWhenVisible className='footer-wrapper'>
        <div className='ms-3'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>
          <div className='row  justify-content-between'>
            <div className='col-lg-4   mt-4'>
              <p className='display-3 text-gray'>
                Radiohead is the first global music streaming service with high fidelity sound, hi-def video quality,
                along with expertly curated playlists and original content making it a trusted source for music and
                culture.
              </p>
            </div>
            <section className='col-xl-6 col-lg-7 offset-xl-2  offset-lg-1 row  m-0 p-0 justify-content-start my-4  '>
              {footerMenu.menu.map((item) => (
                <div className='col-sm-3 col-6  mt-sm-0 mb-3 order-sm-1 order-4'>
                  <h4 className='display-1 text-gray'>{item.menu}</h4>
                  <div className='mt-2 '>
                    {item.subMenu.map((item) => (
                      <p className='display-3 text-light'>{item}</p>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </FadeInComponentWhenVisible>
      <div className='footer-socials'>
        <section className='d-flex justify-content-center align-items-center '>
          {footerMenu.socials.map((item) => (
            
              <img src={item} alt='' />
            
          ))}
        </section>
      </div>
    </>
  );
};

export default Footer;
