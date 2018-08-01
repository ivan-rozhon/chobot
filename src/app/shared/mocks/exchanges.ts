import * as faker from 'faker';

import { Exchange } from '@portfolio/portfolio.model';

export const exchange = (): Exchange => {
  return {
    name: 'Binance',
    type: '',
    apiKey: '',
    apiSecret: '',
    performance: {
      startValue: '0.234',
      startDate: new Date(),
      minValue: '0.234',
      minDate: new Date(),
      maxValue: '0.234',
      maxDate: new Date()
    },
    balance: {
      date: new Date(),
      valueBtc: 0.234,
      changeBtc: 0.002,
      changeBtcPerc: 5.98,
      valueUsd: 0.234,
      changeUsd: 0.002,
      changeUsdPerc: 5.98
    }
  };
};

export const exchangeList = (count: number = faker.random.number({ min: 1, max: 5 })): Exchange[] => {
  const res = [];

  for (let i = 0; i < count; i++) {
    res.push(exchange());
  }

  return res;
};
