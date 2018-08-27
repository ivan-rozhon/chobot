import { Component, Input, Optional } from '@angular/core';
import { Router, UrlTree } from '@angular/router';

import { SidenavComponent } from '@shared/components/sidenav/sidenav.component';

@Component({
  selector: 'cc-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input()
  link: string | UrlTree = '/';
  @Input()
  icon: string;

  constructor(public router: Router, @Optional() private sidenavRef: SidenavComponent) {}

  /** Close sidenav on navigation */
  onNavigation(): void {
    if (this.sidenavRef) {
      // use sidenav ref to determine sidenav mode
      this.sidenavRef.closeOnOverMode(this.sidenavRef.sidenavMode);
    }
  }
}
