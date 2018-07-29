import { Component } from '@angular/core';

import { Exchange } from '@portfolio/portfolio.model';

@Component({
  selector: 'cc-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent {
  exchanges: Exchange[];
  displayedColumns: string[] = ['exchange', 'balance', 'actions'];

  constructor() {
    // TODO: remove (mock)
    this.exchanges = [{ name: 'Binance', performance: { startValue: '0.234' } }] as Exchange[];
  }
}
