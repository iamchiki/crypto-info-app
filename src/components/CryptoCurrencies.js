import millify from 'millify';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Spinner from './Spinner';

const CryptoCurrencies = (props) => {
  const { data, error, isFetching } = useGetCryptosQuery(props.coinLimit);
  // const { coins } = data?.data;
  const coins = data?.data?.coins;
  const [coinList, setCoinList] = useState();

  useEffect(() => {
    setCoinList(coins);
  }, [coins]);
  // if (isFetching) {
  //   return '...Loading';
  // }

  const inputChagneHandler = (e) => {
    let filteredList = coins.filter((coin) => {
      return coin.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCoinList(filteredList);
  };

  // console.log(coins);
  // console.log(data?.data);
  return (
    <div>
      {props.coinLimit === 100 && (
        <div className='p-6 flex justify-center'>
          <input
            onChange={inputChagneHandler}
            className='px-2 py-1 rounded w-[250px]'
            type='text'
            placeholder='Search Crypotcurrency'
          />
        </div>
      )}
      {isFetching && props.coinLimit === 100 && <Spinner></Spinner>}
      {!isFetching && (
        <div className='grid grid-cols-auto  gap-8 p-8 mb-8'>
          {coinList?.map((coin) => {
            return (
              <Link to={`/cryptoDtl/${coin.uuid}`} key={coin.uuid}>
                <div className='bg-white'>
                  <div className='flex justify-between border-b border-solid border-light-grey py-3 px-6'>
                    <h5>
                      {coin.rank}. {coin.name}
                    </h5>
                    <div>
                      <img src={coin.iconUrl} alt='' className='w-9' />
                    </div>
                  </div>
                  <div className='p-6'>
                    <p className='mb-1'>Price: {millify(coin.price)}</p>
                    <p className='mb-1'>
                      Market Cap: {millify(coin.marketCap)}
                    </p>
                    <p>Daily Change: {coin.change}%</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CryptoCurrencies;
