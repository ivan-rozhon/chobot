/**
 * ========
 * EXCHANGE
 * ========
 */

export interface Exchange {
  id: string;
  name: string;
  type: string;
  apiKey: string;
  apiSecret: string;
  userId: number;
  // performance: ExchangePerformance;
  // balance: ExchangeBalance;
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

export interface ExchangeConfig {
  name: string;
  exchange: string;
  apiKey: string;
  apiSecret: string;
}
