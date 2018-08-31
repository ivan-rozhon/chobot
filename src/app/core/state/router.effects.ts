import { Injectable } from '@angular/core';
import { Router, ActivationEnd, RouteConfigLoadStart, RouteConfigLoadEnd, RouterEvent } from '@angular/router';
import { Location } from '@angular/common';

import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { map, tap } from 'rxjs/operators';

import { RouterActionTypes, Go, RouteChange, ConfigLoadStart, ConfigLoadEnd } from '@core/state/router.actions';

@Injectable()
export class RouterEffects {
  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.Go),
    map((action: Go) => action.payload),
    tap(({ path, queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.Back),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.Forward),
    tap(() => this.location.forward())
  );

  /** listen to router changes and dispatch 'RouteChange'/'ConfigLoad...'/ actions on every of these */
  private listenToRouter() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof ActivationEnd) {
        this.store.dispatch(
          new RouteChange({
            params: { ...event.snapshot.params },
            path: event.snapshot.routeConfig.path
          })
        );
      }

      // events emitted on loading (start/end) lazy loaded modules
      // -- load start
      if (event instanceof RouteConfigLoadStart) {
        this.store.dispatch(new ConfigLoadStart());
      }
      // -- load end
      if (event instanceof RouteConfigLoadEnd) {
        this.store.dispatch(new ConfigLoadEnd());
      }
    });
  }

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location,
    private store: Store<any>
  ) {
    // start listen to the route changes
    this.listenToRouter();
  }
}
