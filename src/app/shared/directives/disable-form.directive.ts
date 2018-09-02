import { Directive, Input } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

@Directive({
  selector: '[ccDisableForm]'
})
export class DisableFormDirective {
  @Input('ccDisableForm')
  set data(value: any) {
    // according to result of condition...
    const action = value || value === '' ? 'disable' : 'enable';

    // TODO: enable use together with 'ccDisableControl' directive
    // wait a tick to prevent 'ExpressionChangedAfterItHasBeenCheckedError'
    Promise.resolve().then(() => {
      // ...apply 'disable/enable' state to form
      this.formGroupDirective.form[action]();
    });
  }

  constructor(private formGroupDirective: FormGroupDirective) {}
}
