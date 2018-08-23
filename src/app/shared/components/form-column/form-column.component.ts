import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { coerceNumberProperty, coerceBooleanProperty } from '@angular/cdk/coercion';

import { FormBlockComponent } from '@shared/components/form-block/form-block.component';

@Component({
  selector: 'cc-form-column',
  templateUrl: './form-column.component.html',
  styleUrls: ['./form-column.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormColumnComponent implements OnInit {
  private _columns: number;
  private basicColumnWidth = 180;
  private basicColumnPadding = 16;

  @Input('columnsPart')
  get columns() {
    return this._columns;
  }
  set columns(value: any) {
    // transform input value to number
    const columns = coerceNumberProperty(value);

    // set number of columns
    this._columns = columns;

    // calculate min width of column according to number of columns
    this.minWidthStyle = `${this.basicColumnWidth * columns + 2 * this.basicColumnPadding}px`;
  }
  @Input()
  set halfSplit(value: any) {
    // transform input value to boolean
    this.halfSplitClass = coerceBooleanProperty(value);
  }

  @HostBinding('style.width')
  widthStyle: string;
  @HostBinding('style.minWidth')
  minWidthStyle: string;
  @HostBinding('class.cc-form-column')
  formColumnClass = true;
  @HostBinding('class.half-split')
  halfSplitClass;

  constructor(private formBlockRef: FormBlockComponent) {}

  ngOnInit(): void {
    // set relative percent width of column in relation to total columns
    this.widthStyle = `${(this.columns / this.formBlockRef.totalColumns) * 100}%`;
  }
}
