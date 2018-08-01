import { Component, Input } from '@angular/core';

import { Exchange } from '@portfolio/portfolio.model';

@Component({
  selector: 'cc-exchange-list',
  templateUrl: './exchange-list.component.html',
  styleUrls: ['./exchange-list.component.scss']
})
export class ExchangeListComponent {
  displayedColumns: string[] = ['exchange', 'balanceBtc', 'balanceUsd', 'start', 'min', 'max', 'actions'];

  @Input()
  exchanges: Exchange[];
  @Input()
  loading: boolean;

  constructor() {}
}
