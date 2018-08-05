import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@core/data.service';

import { Exchange } from '@portfolio/models';

@Injectable()
export class PortfolioService {
  constructor(private dataService: DataService) {}

  // TODO: comment, url, name
  getExchangeList(): Observable<Exchange[]> {
    return this.dataService.get<Exchange[]>('exchangeList');
  }
}
