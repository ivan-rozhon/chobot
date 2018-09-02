import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[ccConnectForm]'
})
export class ConnectFormDirective {
  @Input('ccConnectForm')
  set data(val: any) {
    if (val) {
      // wait a tick to prevent 'ExpressionChangedAfterItHasBeenCheckedError'
      Promise.resolve().then(() => {
        // if value exists, patch form with it
        this.formGroupDirective.form.patchValue(val);
        this.formGroupDirective.form.markAsPristine();
      });
    }
  }

  constructor(private formGroupDirective: FormGroupDirective) {}
}
