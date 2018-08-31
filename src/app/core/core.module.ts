import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// state
import { reducers } from '@core/core.state';
import { CodebookEffects } from '@core/state/codebook.effects';
import { RouterEffects } from '@core/state/router.effects';

import { environment } from '@environments/environment';

// services
import { DataService } from '@core/data.service';
import { ConfigService } from '@core/config.service';
import { CodebookService } from '@root/core/codebook.service';
import { FakeBackendInterceptor } from '@core/fake-backend.interceptor';

@NgModule({
  imports: [
    // @ngrx
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([CodebookEffects, RouterEffects])
  ],
  declarations: [],
  providers: [
    DataService,
    ConfigService,
    CodebookService,
    environment.production
      ? []
      : {
          // use fake backend in place of Http service for backend-less development
          provide: HTTP_INTERCEPTORS,
          useClass: FakeBackendInterceptor,
          multi: true
        }
  ]
})
export class CoreModule {}
