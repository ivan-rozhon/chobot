import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@core/data.service';

import { Exchange } from '@portfolio/shared/models';

@Injectable()
export class ExchangeService {
  constructor(private dataService: DataService) {}

  /**
   * exchnageConfig get
   * GET '/exchangeConfig'
   * @param exchange New/Updated exchange
   */
  getExchangeList(): Observable<Exchange[]> {
    return this.dataService.get<Exchange[]>('exchangeConfig', {
      // TODO: remove (mock)
      userId: 34
    });
  }

  /**
   * exchnageConfig create/update
   * PUT '/exchangeConfig'
   * @param exchange New/Updated exchange
   */
  saveExchange(exchange: Exchange): Observable<string> {
    return this.dataService.put<string>('exchangeConfig', {
      ...exchange,
      // TODO: remove (mock)
      userId: 34
    });
  }
}
