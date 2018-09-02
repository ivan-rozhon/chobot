import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[ccDisableControl]'
})
export class DisableControlDirective {
  @Input('ccDisableControl')
  set data(condition: boolean | string) {
    // according to result of condition...
    const action = condition || condition === '' ? 'disable' : 'enable';

    // wait a tick to prevent 'ExpressionChangedAfterItHasBeenCheckedError'
    Promise.resolve().then(() => {
      // ...apply 'disable/enable' state to form
      this.ngControl.control[action]();
    });
  }

  constructor(private ngControl: NgControl) {}
}
