import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import es from "@angular/common/locales/es";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';

import { RoutingModule } from './routing.module';

import { CabeceraComponent, MenuComponent } from "./shared";
import { AppComponent } from './app.component';
import { ErrorInterceptor, JwtInterceptor } from './core/interceptor';

@NgModule({
  declarations: [
    CabeceraComponent, MenuComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    NgBootstrapDarkmodeModule,
    RoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es-AR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
