import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// @angular/material
import { MatIconRegistry } from '@angular/material';

// @ngrx
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

// @ngx-translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// store
import { reducers, metaReducers } from '@root/app.state';

// modules
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from '@root/app-routing.module';

// services
import { ConfigService } from '@core/config.service';

// components
import { AppComponent } from '@root/app.component';

// utils
import { CustomRouterStateSerializer } from '@shared/utils/custom-router-state-serializer';
import { appInitializerFn } from '@shared/utils/app-initializer-fn';

// constants
import { environment } from '@environments/environment.prod';

// @ngx-translate
// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, `${environment.contextRoot}${environment.assets}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // StoreModule.forRoot is imported once in the root module, accepting a reducer function or object map of reducer functions.
    StoreModule.forRoot(reducers, { metaReducers }),

    // @ngrx/router-store keeps router state up-to-date in the store.
    StoreRouterConnectingModule.forRoot({
      // They stateKey defines the name of the state used by the router-store reducer.
      // This matches the key defined in the map of reducers
      stateKey: 'router'
    }),

    // Store devtools instrument the store retaining past versions of state and recalculating new states.
    StoreDevtoolsModule.instrument({
      name: 'Chobot Store DevTools',
      logOnly: environment.production
    }),

    // EffectsModule.forRoot() is imported once in the root module and sets up the effects class
    // to be initialized immediately when the application starts.
    EffectsModule.forRoot([]),

    // @ngx-translate
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // modules
    CoreModule,
    SharedModule,
    // place it to the end - otherwise it causes weird behavior in feature module routes
    AppRoutingModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFn,
      multi: true,
      deps: [ConfigService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    // register 'mdi' icons library
    this.matIconRegistry.addSvgIconSet(
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `${environment.contextRoot}${environment.assets}/assets/fonts/mdi/mdi.svg`
      )
    );
  }
}
