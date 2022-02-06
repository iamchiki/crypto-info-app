import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import CryptoCurrencies from './CryptoCurrencies';
import News from './News';

const Home = () => {
  const { data, error, isFetching } = useGetCryptosQuery(10);
  if (isFetching) {
    return '...Loading';
  }

  const {
    total24hVolume,
    totalCoins,
    totalExchanges,
    totalMarketCap,
    totalMarkets,
  } = data?.data?.stats;

  return (
    <div className='p-8 flex flex-col gap-y-8'>
      <h1 className='font-extrabold text-light-indigo text-2xl'>
        Crypto Stats
      </h1>
      <div className='w-full grid  grid-cols-2 gap-4'>
        <div>
          <h5 className='text-base font-bold'>Total Cryptocurrencies</h5>
          <span>{millify(totalCoins)}</span>
        </div>
        <div>
          <h5 className='text-base font-bold'>Total Exchanges</h5>
          <span>{totalExchanges}</span>
        </div>
        <div>
          <h5 className='text-base font-bold'>Total Market Cap:</h5>
          <span>{millify(totalMarketCap)}</span>
        </div>
        <div>
          <h5 className='text-base font-bold'>Total 24h Volume</h5>
          <span>{millify(total24hVolume)}</span>
        </div>

        <div>
          <h5 className='text-base font-bold'>Total Markets</h5>
          <span>{millify(totalMarkets)}</span>
        </div>
      </div>
      <div className='flex flex-col gap-y-4'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-light-indigo text-2xl'>
            Top 10 Cryptos In The World
          </h1>
          <Link to='/cryptos'>
            <button className='bg-light-indigo text-white hover:bg-white hover:text-light-indigo hover:outline-1 hover:outline px-3 py-1 rounded'>
              Show More
            </button>
          </Link>
        </div>
        <CryptoCurrencies coinLimit={10}></CryptoCurrencies>
      </div>
      <div className='flex flex-col gap-y-4 mb-8'>
        <div className='flex justify-between'>
          <h1 className='font-bold text-light-indigo text-2xl'>
            Latest Crypto News
          </h1>
          <Link to='/news'>
            <button className='bg-light-indigo text-white hover:bg-white hover:text-light-indigo hover:outline-1 hover:outline px-3 py-1 rounded'>
              Show More
            </button>
          </Link>
        </div>
        <News homePage={true}></News>
      </div>
    </div>
  );
};

export default Home;
