export interface Exchange {
  name: string;
  type: string;
  apiKey: string;
  apiSecret: string;
  performance: ExchangePerformance;
}

export interface ExchangePerformance {
  startValue: string;
  startDate: Date;
  minValue: string;
  minDate: Date;
  maxValue: string;
  maxDate: Date;
}
