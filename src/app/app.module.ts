import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgBootstrapDarkmodeModule} from 'ng-bootstrap-darkmode';

import { RoutingModule } from './routing.module';

import { CabeceraComponent, MenuComponent } from "./shared";
import { AppComponent } from './app.component';

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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
