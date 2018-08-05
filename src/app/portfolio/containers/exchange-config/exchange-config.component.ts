import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ExchangeConfig } from '@portfolio/portfolio.model';

@Component({
  selector: 'cc-exchange-config',
  templateUrl: './exchange-config.component.html',
  styleUrls: ['./exchange-config.component.scss']
})
export class ExchangeConfigComponent {
  configForm: FormGroup;

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
