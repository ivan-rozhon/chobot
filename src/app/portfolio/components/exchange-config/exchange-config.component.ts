import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CodebookService } from '@core/codebook.service';

import { Codebook } from '@shared/models';

import { ExchangeConfig } from '@portfolio/shared/models';

@Component({
  selector: 'cc-exchange-config',
  templateUrl: './exchange-config.component.html',
  styleUrls: ['./exchange-config.component.scss']
})
export class ExchangeConfigComponent {
  configForm: FormGroup;

  @Input()
  codebooks: Codebook[];

  constructor(private formBuilder: FormBuilder, public codebookService: CodebookService) {
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
