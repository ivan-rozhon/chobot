import { Component, ViewEncapsulation, HostBinding, Input } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'cc-form-block',
  templateUrl: './form-block.component.html',
  styleUrls: ['./form-block.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormBlockComponent {
  totalColumns: number;

  @Input()
  set columns(value: any) {
    // transform input value to number
    const columns = coerceNumberProperty(value);

    // save as controller variable
    this.totalColumns = columns;

    // set form-columns class accordign to number of columns
    this.className = columns !== 0 ? `cc-form-columns-${columns}` : 'cc-form-columns-1';
  }

  @HostBinding('class')
  className: string;
  @HostBinding('class.cc-form-block')
  formBlockClass = true;

  constructor() {}
}
