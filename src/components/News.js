import moment from 'moment';
import React, { useState } from 'react';
import { useGetCryptosQuery } from '../services/cryptoApi';
import { useGetNewsQuery } from '../services/newsApi';
import Spinner from './Spinner';

const News = (props) => {
  const [newsCategory, setNewsCategory] = useState('CryptoCurrency');
  const [selectValue, setSelectValue] = useState('CryptoCurrency');
  const { data, error, isFetching } = useGetNewsQuery({
    category: newsCategory,
    count: props.homePage ? 6 : 12,
  });
  const { data: coinList } = useGetCryptosQuery(10);

  // if (isFetching) {
  //   return '...Loading';
  // }

  const optionChangeHandler = (e) => {
    setNewsCategory(e.target.value);
    setSelectValue(e.target.value);
  };

  const demoImage =
    'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  return (
    <React.Fragment>
      {!props.homePage && (
        <div className='p-6 flex justify-center'>
          <select
            onChange={optionChangeHandler}
            className='px-2 py-1 rounded w-[250px]'
            value={selectValue}>
            <option value='Cryptocurency'>Cryptocurency</option>
            {coinList?.data?.coins?.map((currency) => (
              <option value={currency.name}>{currency.name}</option>
            ))}
          </select>
        </div>
      )}
      {isFetching && !props.homePage && <Spinner></Spinner>}
      {!isFetching && (
        <div className='grid grid-cols-medium-auto  gap-8 p-8 mb-8'>
          {data?.value?.map((newsItem, index) => {
            return (
              <a
                href={newsItem.url}
                target='_blank'
                rel='noreferrer'
                key={index}>
                <div className='p-6 bg-white flex flex-col gap-y-3'>
                  <div className='flex justify-between'>
                    <h1 className='font-medium text-base'>{newsItem.name}</h1>
                    <img
                      className='w-[100px] object-cover'
                      src={newsItem.image?.thumbnail?.contentUrl || demoImage}
                      alt=''
                    />
                  </div>
                  <p className='text-sm'>
                    {newsItem.description.length > 100
                      ? `${newsItem.description.substring(0, 100)}...`
                      : newsItem.description}
                  </p>
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-x-2 items-center'>
                      <img
                        src={
                          newsItem.provider[0]?.image?.thumbnail?.contentUrl ||
                          demoImage
                        }
                        alt=''
                        className='w-8'
                      />
                      <span className='text-xs'>
                        {newsItem.provider[0]?.name}
                      </span>
                    </div>
                    <span className='text-xs'>
                      {moment(newsItem.datePublished).startOf('ss').fromNow()}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      )}
    </React.Fragment>
  );
};

export default News;
