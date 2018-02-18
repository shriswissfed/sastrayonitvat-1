// CORE
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// web animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';

// CDK
// import { CdkTableModule } from '@angular/cdk/table';

// service worker
import { ServiceWorkerModule } from '@angular/service-worker';

// environment
import { environment } from '../environments/environment';

// HTTP
// import { HttpModule } from '@angular/http';
import { HttpClientModule , HttpClient } from '@angular/common/http';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';

// Firebase
import { AngularFireModule } from 'angularfire2';

// Ngx Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    SharedModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [],
  declarations: [AppComponent],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
