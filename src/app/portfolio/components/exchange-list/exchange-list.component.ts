import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Exchange } from '@portfolio/shared/models';

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

  @Output()
  delete = new EventEmitter<string>();

  constructor() {}

  /**
   * Delete exchange by ID (emit event)
   * @param id ID of the exchange
   */
  onDelete(id: string): void {
    this.delete.emit(id);
  }
}
