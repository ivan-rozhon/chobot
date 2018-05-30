import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material';

// app components
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  imports: [CommonModule, MatSidenavModule],
  declarations: [LayoutComponent, SidenavComponent, PageNotFoundComponent],
  exports: [LayoutComponent, SidenavComponent]
})
export class SharedModule {}
