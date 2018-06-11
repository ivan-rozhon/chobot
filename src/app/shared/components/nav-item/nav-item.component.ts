import { Component, Input } from '@angular/core';

@Component({
  selector: 'cc-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() routerLink: string | any[] = '/';

  constructor() {}
}
