import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// '@angular/material
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

// app components
import { LayoutComponent } from './components/layout/layout.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    // '@angular/material
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  declarations: [LayoutComponent, SidenavComponent, PageNotFoundComponent, ToolbarComponent],
  exports: [
    // '@angular/material
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    // app components
    LayoutComponent,
    SidenavComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ]
})
export class SharedModule {}
