import { Component, Input } from '@angular/core';

import { Bot } from '@bots/shared/models';

@Component({
  selector: 'cc-bot-list',
  templateUrl: './bot-list.component.html',
  styleUrls: ['./bot-list.component.scss']
})
export class BotListComponent {
  displayedColumns: string[] = ['name', 'pairs', 'exchange', 'positions', 'performance', 'active', 'actions'];

  @Input()
  bots: Bot[];
  @Input()
  loading: boolean;

  constructor() {}
}
