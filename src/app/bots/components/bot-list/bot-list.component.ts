import { Component } from '@angular/core';

import { Bot } from '@bots/shared/models';

@Component({
  selector: 'cc-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent {
  bots: Bot[];
  displayedColumns: string[] = ['name', 'pairs', 'exchange', 'positions', 'performance', 'active', 'actions'];

  constructor() {
    // TODO: remove (mock)
    this.bots = [{ name: 'Chobot', exchange: 'Binance' }] as Bot[];
  }
}
