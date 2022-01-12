import React from 'react';
import { ButtonProps } from '../../core/types/button.interface';
import './Button.scss';

const AppBtn = (props: ButtonProps) => {
  return (
    <div className=''>
      <button className={props.outline ? 'bttn outlined ' : 'bttn'}>{props.value}</button>
    </div>
  );
};

export default AppBtn;
