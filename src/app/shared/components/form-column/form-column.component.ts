import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

import { FormBlockComponent } from '@shared/components/form-block/form-block.component';

@Component({
  selector: 'cc-form-column',
  templateUrl: './form-column.component.html',
  styleUrls: ['./form-column.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormColumnComponent implements OnInit {
  private _columns: number;

  @Input('columnsPart')
  get columns() {
    return this._columns;
  }
  set columns(value: any) {
    // transform input value to number
    this._columns = coerceNumberProperty(value);
  }

  @HostBinding('style.width')
  widthStyle: string;
  @HostBinding('class.cc-form-column')
  formColumnClass = true;

  constructor(private formBlockRef: FormBlockComponent) {}

  ngOnInit(): void {
    // set relative percent width of column in relation to total columns
    this.widthStyle = `${(this.columns / this.formBlockRef.totalColumns) * 100}%`;
  }
}
