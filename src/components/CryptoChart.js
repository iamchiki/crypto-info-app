import React from 'react';
import { Line } from 'react-chartjs-2';

const CryptoChart = (props) => {
  const { coinHistory, currentPrice, coinName } = props;

  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='mb-4'>
      <div className='flex justify-between'>
        <h1 className='font-medium text-light-indigo text-2xl'>
          {coinName} Price Chart
        </h1>
        <div className='flex gap-x-4 font-bold'>
          <span>Change: {coinHistory?.data?.change}%</span>
          <span>
            Current {coinName} Price: $ {currentPrice}
          </span>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default CryptoChart;
