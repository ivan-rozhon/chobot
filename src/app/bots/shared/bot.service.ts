import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { DataService } from '@core/data.service';

import { Bot } from '@bots/shared/models';

@Injectable()
export class BotService {
  constructor(private dataService: DataService) {}

  /**
   * Load list of user defined bot configurations
   * GET '/botConfig'
   */
  getBotList(): Observable<Bot[]> {
    return this.dataService.get<Bot[]>('botConfig', {
      // TODO: remove (mock)
      userId: 34
    });
  }
}
