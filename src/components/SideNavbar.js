import React from 'react';
import { Link } from 'react-router-dom';
import { cryptoIcon, homeIcon, newsIcon } from '../svg/icons';

const SideNavbar = () => {
  return (
    <div className='w-64 h-screen bg-dark-blue fixed left-0'>
      <div className='text-light-indigo'>
        <h1>Crypto App</h1>
      </div>
      <div>
        <ul>
          <li className='text-light-grey'>
            <Link to='/home'>
              <div className='ml-4 flex gap-x-2 items-center'>
                <span>{homeIcon}</span>
                <h4>Home</h4>
              </div>
            </Link>
          </li>
          <li className='text-light-grey'>
            <Link to='/cryptos'>
              <div className='ml-4 flex gap-x-2 items-center'>
                <span>{cryptoIcon}</span>
                <h4>Cryptocurrencies</h4>
              </div>
            </Link>
          </li>
          <li className='text-light-grey'>
            <Link to='/news'>
              <div className='ml-4 flex gap-x-2 items-center'>
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
