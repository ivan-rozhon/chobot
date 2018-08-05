import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'cc-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent {
  @HostBinding('class.cc-form-container')
  formContainerClass = true;
  constructor() {}
}
