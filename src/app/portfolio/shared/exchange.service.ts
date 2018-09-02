import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@core/data.service';

import { Exchange } from '@portfolio/shared/models';

@Injectable()
export class ExchangeService {
  constructor(private dataService: DataService) {}

  /**
   * Load list of user defined exchange configurations
   * GET '/exchangeConfig'
   */
  getExchangeList(): Observable<Exchange[]> {
    return this.dataService.get<Exchange[]>('exchangeConfig', {
      // TODO: remove (mock)
      userId: 34
    });
  }

  /**
   * Load one specific exchange configuration by ID
   * GET '/exchangeConfig'
   * @param exchangeId ID of requested exchange
   */
  getExchange(exchangeId: string): Observable<Exchange> {
    return this.dataService.get<Exchange>('exchangeConfig', {
      exchangeId,
      // TODO: remove (mock)
      userId: 34
    });
  }

  /**
   * Create new/Update existing exchange configuration
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

  /**
   * Delete exchange configuration by ID
   * DELETE '/exchangeConfig'
   * @param exchangeId ID of exchange to delete
   */
  deleteExchange(exchangeId: string): Observable<string> {
    return this.dataService.delete<string>('exchangeConfig', {
      exchangeId
    });
  }
}
