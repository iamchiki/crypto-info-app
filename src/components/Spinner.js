import React from 'react';
import spiningGif from '../img/spinning.gif';

const Spinner = () => {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <img src={spiningGif} alt='' />
    </div>
  );
};

export default Spinner;
