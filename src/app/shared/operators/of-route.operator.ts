import { Action } from '@ngrx/store';

import { OperatorFunction } from 'rxjs';
import { filter } from 'rxjs/operators';

import { RouteChange, RouterActionTypes } from '@core/state/router.actions';

// https://medium.com/@amcdnl/angular-routing-data-with-ngrx-effects-1cda1bd5e579
export function ofRoute(route: string | string[]): OperatorFunction<Action, Action> {
  return filter((action: Action) => {
    // check if action is router change action
    const isRouteAction: boolean = action.type === RouterActionTypes.RouteChange;

    // if so,...
    if (isRouteAction) {
      // get the route path
      const routeAction = action as RouteChange;
      const routePath = routeAction.payload.path;

      // ...and check if explored route is same as route from action
      if (Array.isArray(route)) {
        return route.includes(routePath);
      } else {
        return routePath === route;
      }
    }

    // otherwise return false
    return isRouteAction;
  });
}
