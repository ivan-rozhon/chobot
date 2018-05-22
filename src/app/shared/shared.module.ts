import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material';

import { LayoutComponent } from './layout/layout.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [LayoutComponent, SidenavComponent],
  exports: [LayoutComponent, SidenavComponent]
})
export class SharedModule {}
