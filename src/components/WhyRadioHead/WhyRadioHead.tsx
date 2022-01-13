import React from 'react';
import { whyRadioheadData } from '../../core/data/why-radiohead';
import FadeInComponentWhenVisible from '../FadeInComponent';
import './WhyRadioHead.scss';

const WhyRadioHead = () => {
  return (
    <FadeInComponentWhenVisible className='why-radiohead-wrapper'>
      <div className='ms-3'>
        <h1>Why radiohead?</h1>
        <section className='row justify-content-between  my-4 '>
          {whyRadioheadData.map((item) => (
            <div className='col-lg-5 col-md-6 d-flex'>
              <div className='bar me-3'></div>
              <div className='mt-2 ms-3'>
                <h3 className='px'>{item.title}</h3>
                <p className='display-1'>{item.subTitle}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </FadeInComponentWhenVisible>
  );
};

export default WhyRadioHead;
