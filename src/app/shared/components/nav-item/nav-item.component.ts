import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cc-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() routerLink: string | any[] = '/';
  @Input() icon: string;

  constructor(public router: Router) {}
}
