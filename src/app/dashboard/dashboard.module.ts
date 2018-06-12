import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '@shared/shared.module';
import { DashboardRoutingModule } from '@dashboard/dashboard-routing.module';

// components
import { DashboardComponent } from '@dashboard/containers/dashboard.component';

@NgModule({
  imports: [SharedModule, DashboardRoutingModule],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
