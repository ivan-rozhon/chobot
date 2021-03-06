import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '@shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  // default route is 'dashboard'
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // do a lazy load other feature modules
  {
    path: 'dashboard',
    loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'portfolio',
    loadChildren: 'app/portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'bots',
    loadChildren: 'app/bots/bots.module#BotsModule'
  },
  // otherwise - show 'Page not found'
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
