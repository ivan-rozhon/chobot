import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cc-form-title',
  templateUrl: './form-title.component.html',
  styleUrls: ['./form-title.component.scss']
})
export class FormTitleComponent {
  private _toggleable: boolean;
  @Input()
  get toggleable() {
    return this._toggleable;
  }
  set toggleable(value: any) {
    // transform input value to boolean
    this._toggleable = coerceBooleanProperty(value);
  }

  constructor() {}
}
