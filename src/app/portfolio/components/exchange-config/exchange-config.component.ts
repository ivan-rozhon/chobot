import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CodebookService } from '@core/codebook.service';

import { Codebook } from '@shared/models';

import { Exchange } from '@portfolio/shared/models';

@Component({
  selector: 'cc-exchange-config',
  templateUrl: './exchange-config.component.html',
  styleUrls: ['./exchange-config.component.scss']
})
export class ExchangeConfigComponent {
  configForm: FormGroup;

  @Input()
  exchange: Exchange;
  @Input()
  loading: boolean;
  @Input()
  codebooks: Codebook[];

  @Output()
  save = new EventEmitter<Exchange>();

  constructor(private formBuilder: FormBuilder, public codebookService: CodebookService) {
    // build form
    this.buildForm();
  }

  /** Build reactive form with form builder */
  buildForm(): void {
    this.configForm = this.formBuilder.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      apiKey: ['', Validators.required],
      apiSecret: ['']
    });
  }

  /**
   * Merge original exchange/null with modified/created exchange object
   * @param exchange Original exchange object/null
   * @param configFormValue Modified/created exchange object (form values)
   */
  onSave(exchange: Exchange, configFormValue: Partial<Exchange>): void {
    this.save.emit({ ...exchange, ...configFormValue });
  }

  /** Get value of config form */
  get configFormValue(): Partial<Exchange> {
    return this.configForm.value;
  }

  /** Get ID of exchange if exists */
  get exchangeId(): string {
    return this.exchange ? this.exchange.id : null;
  }
}
