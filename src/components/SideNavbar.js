import React from 'react';
import { Link } from 'react-router-dom';
import { cryptoIcon, homeIcon, newsIcon } from '../svg/icons';
import cryptoHomeIcon from '../img/crypto-img.png';

const SideNavbar = () => {
  return (
    <div className='w-64 h-screen bg-dark-blue fixed left-0'>
      <Link to='/home'>
        <div className='my-4 font-extrabold text-light-indigo text-2xl flex items-center justify-evenly'>
          <img src={cryptoHomeIcon} alt='' />
          <h1 className=''>Crypto App</h1>
        </div>
      </Link>
      <div>
        <ul className='flex flex-col'>
          <li className='text-light-grey p-2'>
            <Link to='/home'>
              <div className='ml-4 flex gap-x-2 items-center hover:text-light-indigo'>
                <span>{homeIcon}</span>
                <h4>Home</h4>
              </div>
            </Link>
          </li>
          <li className='text-light-grey p-2'>
            <Link to='/cryptos'>
              <div className='ml-4 flex gap-x-2 items-center hover:text-light-indigo'>
                <span>{cryptoIcon}</span>
                <h4>Cryptocurrencies</h4>
              </div>
            </Link>
          </li>
          <li className='text-light-grey p-2'>
            <Link to='/news'>
              <div className='ml-4 flex gap-x-2 items-center hover:text-light-indigo'>
                <span>{newsIcon}</span>
                <h4>News</h4>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavbar;
