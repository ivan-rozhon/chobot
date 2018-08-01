export interface Exchange {
  name: string;
  type: string;
  apiKey: string;
  apiSecret: string;
  performance: ExchangePerformance;
  balance: ExchangeBalance;
}

export interface ExchangePerformance {
  startValue: string;
  startDate: Date;
  minValue: string;
  minDate: Date;
  maxValue: string;
  maxDate: Date;
}

export interface ExchangeBalance {
  date: Date;
  valueBtc: number;
  changeBtc: number;
  changeBtcPerc: number;
  valueUsd: number;
  changeUsd: number;
  changeUsdPerc: number;
}
