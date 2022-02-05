import millify from 'millify';
import React from 'react';
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
    <div className='p-4'>
      <h1>Crypto Stats</h1>
      <div className='w-full grid  grid-cols-2 gap-4'>
        <div>
          <h5>Total Cryptocurrencies</h5>
          <span>{millify(totalCoins)}</span>
        </div>
        <div>
          <h5>Total Exchanges</h5>
          <span>{totalExchanges}</span>
        </div>
        <div>
          <h5>Total Market Cap:</h5>
          <span>{millify(totalMarketCap)}</span>
        </div>
        <div>
          <h5>Total 24h Volume</h5>
          <span>{millify(total24hVolume)}</span>
        </div>

        <div>
          <h5>Total Markets</h5>
          <span>{millify(totalMarkets)}</span>
        </div>
      </div>
      <div>
        <div className='flex justify-between'>
          <h1>Top 10 Cryptos In The World</h1>
          <button className='bg-light-indigo text-white'>Show More</button>
        </div>
        <CryptoCurrencies coinLimit={10}></CryptoCurrencies>
      </div>
      <div>
        <div className='flex justify-between'>
          <h1>Latest Crypto News</h1>
          <button className='bg-light-indigo text-white'>Show More</button>
        </div>
        <News homePage={true}></News>
      </div>
    </div>
  );
};

export default Home;
