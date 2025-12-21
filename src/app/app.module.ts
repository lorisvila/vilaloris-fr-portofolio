import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {WcsAngularModule} from "wcs-angular";
import {appRoutingModule} from "./app.routing";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListElementComponent } from './pages/home-page/list-element/list-element.component';
import { ProjetsPageComponent } from './pages/projets-page/projets-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FormlyModule} from "@ngx-formly/core";
import {WcsFormlyModule} from "wcs-formly";
import { BdCV0BhmPageComponent } from './pages/projets-page/project/bd-c-v0-bhm-page/bd-c-v0-bhm-page.component';
import { ParcoursPageComponent } from './pages/parcours-page/parcours-page.component';
import { Error404Component } from './pages/errors/error-404/error-404.component';
import { PassionsPageComponent } from './pages/passions-page/passions-page.component';
import { ErrorDevComponent } from './pages/errors/error-dev/error-dev.component';

// ngx-translate imports
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { provideTranslateHttpLoader, TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListElementComponent,
    ProjetsPageComponent,
    ContactPageComponent,
    BdCV0BhmPageComponent,
    ParcoursPageComponent,
    Error404Component,
    PassionsPageComponent,
    ErrorDevComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    WcsAngularModule,
    appRoutingModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      closeButton: true,
      autoDismiss: true,
      timeOut: 7000,
      extendedTimeOut: 5000,
      progressBar: true
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    WcsFormlyModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    // Provide configuration for TranslateHttpLoader (v17+)
    ...provideTranslateHttpLoader({ prefix: '/assets/i18n/', suffix: '.json' }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
