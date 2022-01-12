import React from 'react';
import { brands } from '../../core/data/brand';
import './Brand.scss';

const Brand = () => {
  return (
    <div className='brand-wrapper d-flex justify-content-between align-items-center  overflow-auto'>
      {brands.map((item, index) => (
        <div className='col brand'>
          <img src={item} alt={`brand-${index}`} />
           
        </div>
      ))}
    </div>
  );
};

export default Brand;
