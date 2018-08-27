import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input()
  open: boolean;

  @Output()
  toogleSidenav = new EventEmitter<boolean>();

  constructor() {}
}
