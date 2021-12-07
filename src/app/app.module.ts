import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {of} from 'rxjs';
import {NgBootstrapDarkmodeModule, THEME_LOADER, THEME_SAVER} from 'ng-bootstrap-darkmode';

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
    NgBootstrapDarkmodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
