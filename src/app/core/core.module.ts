import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';

// state
import { reducers } from '@core/core.state';

import { environment } from '@environments/environment';

// services
import { DataService } from '@core/data.service';
import { ConfigService } from '@core/config.service';
import { FakeBackendInterceptor } from '@core/fake-backend.interceptor';

@NgModule({
  imports: [
    // @ngrx
    StoreModule.forFeature('core', reducers)
  ],
  declarations: [],
  providers: [
    DataService,
    ConfigService,
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
