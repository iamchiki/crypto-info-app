import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
} from '../services/cryptoApi';
import CryptoChart from './CryptoChart';
import Spinner from './Spinner';

const CryptoDetail = () => {
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState('7d');
  const { data, error, isFetching } = useGetCryptoDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });

  const cryptoDtl = data?.data?.coin;
  // if (isFetching) {
  //   return '...Loading';
  // }

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
  const stats = [
    {
      title: 'Price to USD',
      value: `$ ${cryptoDtl?.price && millify(cryptoDtl?.price)}`,
    },
    { title: 'Rank', value: cryptoDtl?.rank },
    {
      title: '24h Volume',
      value: `$ ${
        cryptoDtl?.['24hVolume'] && millify(cryptoDtl?.['24hVolume'])
      }`,
    },
    {
      title: 'Market Cap',
      value: `$ ${cryptoDtl?.marketCap && millify(cryptoDtl?.marketCap)}`,
    },
    {
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDtl?.allTimeHigh?.price && millify(cryptoDtl?.allTimeHigh?.price)
      }`,
    },
  ];

  const genericStats = [
    {
      title: 'Number Of Markets',
      value: cryptoDtl?.numberOfMarkets,
    },
    {
      title: 'Number Of Exchanges',
      value: cryptoDtl?.numberOfExchanges,
    },

    {
      title: 'Total Supply',
      value: `$ ${
        cryptoDtl?.supply?.total && millify(cryptoDtl?.supply?.total)
      }`,
    },
    {
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDtl?.supply?.circulating &&
        millify(cryptoDtl?.supply?.circulating)
      }`,
    },
  ];

  const optionChangeHandler = (e) => {
    setTimeperiod(e.target.value);
  };

  console.log(cryptoDtl);
  return (
    <React.Fragment>
      {isFetching && <Spinner></Spinner>}
      {!isFetching && (
        <div className='p-8'>
          <div className='mb-8 p-6 flex flex-col items-center gap-y-5 border-b border-solid border-light-grey'>
            <h1 className='font-extrabold text-light-indigo text-2xl'>
              {cryptoDtl.name} ({cryptoDtl.symbol}) Price
            </h1>
            <p className='font-medium'>
              {cryptoDtl.name} live price in US Dollar (USD). View value
              statistics, market cap and supply.
            </p>
          </div>
          <div className='mb-2'>
            <select
              className='px-2 py-1 rounded w-[250px]'
              defaultValue='7d'
              placeholder='Select Timeperiod'
              onChange={optionChangeHandler}>
              {time.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <CryptoChart
            coinHistory={coinHistory}
            currentPrice={millify(cryptoDtl?.price)}
            coinName={cryptoDtl?.name}></CryptoChart>
          <div className='flex gap-x-16 mb-12'>
            <div className='flex flex-col gap-y-2 flex-1'>
              <h1 className='font-semibold text-light-indigo text-xl'>
                {cryptoDtl.name} Value Statistics
              </h1>
              <p>
                An overview showing the statistics of {cryptoDtl.name}, such as
                the base and quote currency, the rank, and trading volume.
              </p>
              <ul>
                {stats.map((stateItem, index) => {
                  return (
                    <li key={index}>
                      <div className='p-4 flex justify-between border-b border-solid border-light-grey'>
                        <div>
                          <span>{stateItem.title}</span>
                        </div>
                        <span>{stateItem.value}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <h1 className='font-semibold text-light-indigo text-xl'>
                Other Stats Info
              </h1>
              <p>
                An overview showing the statistics of {cryptoDtl.name}, such as
                the base and quote currency, the rank, and trading volume.
              </p>
              <ul>
                {genericStats.map((genericItem, index) => {
                  return (
                    <li key={index}>
                      <div className='p-4 flex justify-between border-b border-solid border-light-grey'>
                        <div>
                          <span>{genericItem.title}</span>
                        </div>
                        <span>{genericItem.value}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='flex gap-x-16 mb-12'>
            <div className='flex flex-col gap-y-2 flex-1 crypto-decription'>
              <h1 className='font-semibold text-light-indigo text-xl'>
                What is Bitcoin?
              </h1>
              {HTMLReactParser(cryptoDtl.description)}
            </div>
            <div className='flex flex-col gap-y-2 flex-1'>
              <h1 className='font-semibold text-light-indigo text-xl'>
                Bitcoin Links
              </h1>
              <ul>
                {cryptoDtl.links?.map((linkItem) => {
                  return (
                    <li key={linkItem.name}>
                      <div className='p-4 flex justify-between border-b border-solid border-light-grey'>
                        <span className='font-semibold'>{linkItem.type}</span>
                        <a
                          href={linkItem.url}
                          className='font-semibold text-light-indigo text-base'
                          target='_blank'
                          rel='noreferrer'>
                          {linkItem.name}
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CryptoDetail;
