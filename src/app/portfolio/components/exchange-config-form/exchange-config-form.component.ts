import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Codebook } from '@shared/models';

import { ExchangeConfig } from '@portfolio/shared/models';

@Component({
  selector: 'cc-exchange-config-form',
  templateUrl: './exchange-config-form.component.html',
  styleUrls: ['./exchange-config-form.component.scss']
})
export class ExchangeConfigFormComponent {
  configForm: FormGroup;

  @Input()
  codebooks: Codebook[];

  constructor(private formBuilder: FormBuilder) {
    // build form
    this.buildForm();
  }

  /** Build reactive form with form builder */
  buildForm(): void {
    this.configForm = this.formBuilder.group({
      name: ['', Validators.required],
      exchange: ['', Validators.required],
      apiKey: ['', Validators.required],
      apiSecret: ['', Validators.required]
    });
  }

  /** Get value of config form */
  get configFormValue(): ExchangeConfig {
    return this.configForm.value;
  }
}
