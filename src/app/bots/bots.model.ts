export interface Bot {
  name: string;
  exchange: string;
  baseCurrency: string;
  tradeAmount: number;
  maxAmountUse: number;
  maxOpenPositions: number;
}
